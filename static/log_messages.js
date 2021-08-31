// house related log messages
exports.hos_getHosSuc = (houses) => `Get houses successful - houses: ${JSON.stringify(houses)}`;
exports.hos_getHosSt = `Get houses - START`
exports.hos_getHosHouses = `Get houses - getting houses data`
exports.hos_fmtRes = `Get houses - formatting response data`

// slots related log messages
exports.vsts_getSltsSt = `Get timeslots - START`;
exports.vsts_getSltsHouses = `Get timeslots - getting houses data`
exports.vsts_getSltsSlots = `Get timeslots - getting all slots`
exports.vsts_getSltsAvlSlt = `Get timeslots - filtering available slots`
exports.vsts_getSltsSuc = (timeslots) => `Get timeslots successful - timeslots: ${JSON.stringify(timeslots)}`;

exports.vsts_bookSltHouses = `Book timeslot - getting houses data`
exports.vsts_bookSltSlots = `Book timeslot - getting slots data`
exports.vsts_bookSltAvlSlt = `Book timeslot - filtering available slots`
exports.vsts_bookSltSuc = (bookedSlot) => `Book timeslot successful - booked: ${JSON.stringify(bookedSlot)}`