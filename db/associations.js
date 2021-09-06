// form associations of related tables

const Sequelize = require("sequelize");

const Owners = require("./models/owners.models");
const Realtors = require("./models/realtors.models");
const Houses = require("./models/houses.models");
const HouseVisitAvailabilities = require("./models/house_visit_availabilities.models");
let ownersModel
let realtorsModel
let housesModel
let houseVisitAvailabilitiesModel

ownersModel = Owners(DB_CONN,Sequelize);
realtorsModel = Realtors(DB_CONN,Sequelize);
housesModel =  Houses(DB_CONN,Sequelize);
houseVisitAvailabilitiesModel = HouseVisitAvailabilities(DB_CONN,Sequelize);

housesModel.belongsTo(ownersModel, {foreignKey: 'owner_id'})

houseVisitAvailabilitiesModel.belongsTo(housesModel, {foreignKey: 'property_id'})

module.exports = {
    ownersModel,
    realtorsModel,
    housesModel,
    houseVisitAvailabilitiesModel
}