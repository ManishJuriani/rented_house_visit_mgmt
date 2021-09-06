
/* This is the Sequelize model for realtors table */
const realtorsModel = (database, type) => {
	return database.define("realtors", {
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

module.exports = realtorsModel;