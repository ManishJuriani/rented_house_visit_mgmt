
const Owners = require("./owners.models");

/* This is the Sequelize model for houses table */
const housesModel = (database, type) => {
	return database.define("houses", {
		id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: { 
			type:type.TEXT,
			allowNull: false
		},
        description: { 
			type:type.TEXT,
			allowNull: true
		},
		address: { 
			type:type.TEXT,
			allowNull: false
		},
		owner_id: { 
			type:type.INTEGER,
			references: {
				model: Owners,
				key: "id",
				deferrable: type.Deferrable.INITIALLY_IMMEDIATE
			},
			allowNull: false
		}
	},{
		timestamps: false
	});
};

module.exports = housesModel;