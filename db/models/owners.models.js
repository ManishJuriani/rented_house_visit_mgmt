
/* This is the Sequelize model for owners table */
const ownersModel = (database, type) => {
	return database.define("owners", {
		id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: { 
			type:type.TEXT,
			allowNull: false
		},
		email: { 
			type:type.STRING(256),
			allowNull: false
		},
		phone: { 
			type:type.STRING(256),
			allowNull: false
		}
	},{
		timestamps: false
	});
};

module.exports = ownersModel;