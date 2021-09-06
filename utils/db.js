const Sequelize = require("sequelize");
const logger = require("./logger");
const logMsgs = require("../static/log_messages");

//Global DB connection object
global.DB_CONN = {};

exports.createDBConnection = async () => {
    logger.info(logMsgs.db_createConnection);
    try {
        const connObj = await new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
                dialect: process.env.DB_DIALECT,
            }
        );
        DB_CONN=connObj;
    } catch (err) {
        //Log error
        logger.error(logMsgs.db_errConnectingDB(process.env.DB_NAME));
    }
}

// get DB Connection Object
exports.getDBConnObj = async () => {
	//If connection object is not in memory, create it
	if (!DB_CONN) {
        logger.info(logMsgs.db_createConnection);
		
		// Create DB connection
		try {
			DB_CONN = await new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
				host: process.env.DB_HOST,
				dialect: process.env.DB_DIALECT,
				port: process.env.DB_PORT,
			});
		} catch (err) {
			//Log and throw error
			logger.error(logMsgs.db_errConnectingDB(process.env.DB_NAME));
			throw err;
		}
	}
	logger.info(`Connected to db: ${process.env.DB_NAME}`);
	//Return connection object
	return DB_CONN;
};

// Test the DB connection
exports.testConnection = (db) => {
	// Test DB
	return db
		.authenticate()
		.then(() => {
			logger.info(logMsgs.db_authenticated);
		})
		.catch((err) => {
			logger.error(logMsgs.db_unableToConnect(err));
			throw err;
		});
};