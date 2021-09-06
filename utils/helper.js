const consts = require("../static/constants");

exports.formatGetHousesResponseData = (housesData) => {
    // format list of houses with their owner names
    console.log(JSON.parse(JSON.stringify(housesData)))
    const formattedHousesData = housesData.map(({id, title, description, address,owner}) => ({id, title, description, address,owner:owner.name}))
    return formattedHousesData;
}

exports.frmtGtAvlblSltsRspData = (visitSlotsAvailability) => {
    // format list of available slots with house info and owner names 
    const formattedSlotsAvailable = 
    visitSlotsAvailability
        .map(({id,start_time,duration,day_of_week,house})=>({
            id,
            house_title: house.title,
            house_description: house.description,
            owner: house.owner.name,
            available_from: start_time,
            duration: duration+' minutes',
            day_of_week: consts.DAY_OF_WEEK[day_of_week],
        }));

    return formattedSlotsAvailable;
}