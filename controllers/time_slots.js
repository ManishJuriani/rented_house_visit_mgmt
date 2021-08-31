// file to add time slots related functions

const logger = require('../utils/logger');
const logMsgs = require("../static/log_messages");
const respMsgs = require("../static/resp_messages");
const consts = require("../static/constants");
const fileSystem = require("fs");
const path = require('path');
const helper = require("../utils/helper");

exports.getTimeSlots = async (req, res) => {
    try{
        
        logger.info(logMsgs.vsts_getSltsSt);
        
        logger.info(logMsgs.vsts_getSltsHouses);
        const housesData = fileSystem.readFileSync(path.join(__dirname,"../static/data/houses.json"))

        logger.info(logMsgs.vsts_getSltsSlots);
        const visitSlotsAvailability = fileSystem.readFileSync(path.join(__dirname,"../static/data/house_visit_availability.json"))

        logger.info(logMsgs.vsts_getSltsAvlSlt);
        const slotsAvailable = helper.frmtGtAvlblSltsRspData(visitSlotsAvailability,housesData); 

        logger.info(logMsgs.vsts_getSltsSuc(slotsAvailable));
        res.status(200).send({
            message: respMsgs.SUCCESS,
            slotsAvailable
        });

    }catch(err){
        logger.error(err);
        return res.status(503).send({
            message: respMsgs.ISE,
        });
    }
}

exports.bookTimeSlot = async (req, res) => {
    try{
        
        const slotId = req.params.id;

        logger.info(logMsgs.vsts_bookSltHouses);
        const housesData = fileSystem.readFileSync(path.join(__dirname,"../static/data/houses.json"))

        logger.info(logMsgs.vsts_bookSltSlots);
        const visitSlotsAvailability = fileSystem.readFileSync(path.join(__dirname,"../static/data/house_visit_availability.json"))

        logger.info(logMsgs.vsts_bookSltAvlSlt);
        const slotsAvailable = helper.frmtGtAvlblSltsRspData(visitSlotsAvailability,housesData);
        
        let response;
        if(slotsAvailable.hasOwnProperty(slotId)){
            response = slotsAvailable[slotId];
        }else{
            return res.status(400).send({
                message: respMsgs.bookTs_notAvailable,
            })
        }
        
        logger.info(logMsgs.vsts_bookSltSuc(response));
        res.status(200).send({
            message: respMsgs.SUCCESS,
            slot: response
        });

    }catch(err){
        logger.error(err);
        return res.status(503).send({
            message: respMsgs.ISE,
        });
    }
}