
/* This is the Sequelize model for house_visit_availabilities table */
const houseVisitAvailabilitiesModel = (database, type) => {
	return database.define("house_visit_availabilities", {
		id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		property_id: { 
			type:type.INTEGER,
			allowNull: false
		},
        start_time: { 
			type:type.STRING(15),
			allowNull: false
		},
        duration: { 
			type:type.INTEGER,
			allowNull: false
		},
        day_of_week: { 
			type:type.INTEGER,
            validation:{
                isIn: [[0,1,2,3,4,5,6]]
            },
			allowNull: false
		},
		status: { 
			type:type.TEXT,
            validation:{
                isIn: [['AVAILABLE'],['UNAVAILABLE']]
            },
			allowNull: false
		},
		realtor_id: { 
			type:type.INTEGER,
			allowNull: true
		}
	},{
		timestamps: false
	});
};

module.exports = houseVisitAvailabilitiesModel;