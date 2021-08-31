const consts = require("../static/constants");

exports.formatGetHousesResponseData = (housesData) => {
    const housesDataInJson = JSON.parse(housesData);
    const formattedHousesData = housesDataInJson.map(({id, title, description, address}) => ({id, title, description, address}))
    return formattedHousesData;
}

exports.frmtGtAvlblSltsRspData = (visitSlotsAvailability,housesData) => {
    const visitSlotsAvailabilityInJson = JSON.parse(visitSlotsAvailability);
    const housesDataInJson = JSON.parse(housesData);
    
    let formattedSlotsAvailable = {};

    visitSlotsAvailabilityInJson
        .forEach(({id,property_id,start_time,duration,day_of_week,status})=>{
            if(status==consts.SLOT_STATUS.AVAILABLE)
                formattedSlotsAvailable[id] = {
                    property: {
                        ...housesDataInJson[property_id-1],
                        owner_id: undefined
                    },
                    from: start_time,
                    duration,
                    day_of_week: consts.DAY_OF_WEEK[day_of_week],
                    status
                }
        });

    return formattedSlotsAvailable;
}