// file to add houses related functions

const logger = require('../utils/logger');
const logMsgs = require("../static/log_messages");
const respMsgs = require("../static/resp_messages");
const consts = require("../static/constants");
const fileSystem = require("fs");
const path = require('path');
const helper = require("../utils/helper");

exports.getHouses = async (req, res)=> {
    try{
        logger.info(logMsgs.hos_getHosSt);
        
        logger.info(logMsgs.hos_getHosHouses);
        const housesData = fileSystem.readFileSync(path.join(__dirname,"../static/data/houses.json"))

        logger.info(logMsgs.hos_fmtRes);
        const listOfHouses = helper.formatGetHousesResponseData(housesData); 
        
        logger.info(logMsgs.hos_getHosSuc(listOfHouses));
        res.status(200).send({
            message: respMsgs.SUCCESS,
            listOfHouses
        });
    }catch(err){
        logger.error(err);
        return res.status(503).send({
            message: respMsgs.ISE,
        });
    }
}