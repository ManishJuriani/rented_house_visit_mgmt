// file to add time slots related functions

const logger = require('../utils/logger');
const logMsgs = require("../static/log_messages");
const respMsgs = require("../static/resp_messages");
const consts = require("../static/constants");
const helper = require("../utils/helper");

exports.getTimeSlots = async (req, res) => {
    global.models = require('../db/associations');

    try{
        logger.info(logMsgs.vsts_getSltsSt);
        
        logger.info(logMsgs.vsts_getSltsHouses);

        logger.info(logMsgs.vsts_getSltsAvlSlt);
        // get available slots with house and owner data
        const visitSlotsAvailability = await models.houseVisitAvailabilitiesModel
                                        .findAll({
                                            where: {
                                                status: consts.SLOT_STATUS.AVAILABLE
                                            },
                                            attributes: ['id','start_time','duration','day_of_week'],
                                            include: [{
                                                model:models.housesModel,
                                                include: [{
                                                    model: models.ownersModel
                                                }]
                                            }],
                                        })

        const slotsAvailable = helper.frmtGtAvlblSltsRspData(visitSlotsAvailability); 
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
    global.models = require('../db/associations');
    try{
        
        const slotId = req.params.id;

        logger.info(logMsgs.vsts_bookSltHouses);

        logger.info(logMsgs.vsts_bookSltAvlSlt);
        // If timeslot is available, book it
        const [updatedSlot] = await models.houseVisitAvailabilitiesModel
        .update(
            {
                status: consts.SLOT_STATUS.UNAVAILABLE
            },
            {
                where: {
                    id: slotId,
                    status: consts.SLOT_STATUS.AVAILABLE
                }
            })
        
        if(updatedSlot==0)
            return res.status(400).send({
                message: respMsgs.bookTs_notAvailable,
            });
        
        logger.info(logMsgs.vsts_bookSltSuc(slotId));
        res.status(200).send({
            message: respMsgs.SUCCESS,
        });

    }catch(err){
        logger.error(err);
        return res.status(503).send({
            message: respMsgs.ISE,
        });
    }
}