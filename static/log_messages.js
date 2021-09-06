// Database log messages
exports.db_createConnection = 'Connecting to DB'
exports.db_createConnection_Suc = 'DB Connection Created Successfully';
exports.db_errConnectingDB = (dbName) => `Error connecting to DB: ${dbName}`;
exports.db_authenticated = "Tested database connection successfully!";
exports.db_unableToConnect= (err) => `Database connection test failed: ${JSON.stringify(err)}`;

// House related log messages
exports.hos_getHosSuc = (houses) => `Get houses successful - houses: ${JSON.stringify(houses)}`;
exports.hos_getHosSt = `Get houses - START`
exports.hos_getHosHouses = `Get houses - getting houses data`
exports.hos_fmtRes = `Get houses - formatting response data`

// Slots related log messages
exports.vsts_getSltsSt = `Get timeslots - START`;
exports.vsts_getSltsHouses = `Get timeslots - getting houses data`
exports.vsts_getSltsAvlSlt = `Get timeslots - getting available slots`
exports.vsts_getSltsSuc = (timeslots) => `Get timeslots successful - timeslots: ${JSON.stringify(timeslots)}`;

// Book Timeslot related log messages
exports.vsts_bookSltHouses = `Book timeslot - getting houses data`
exports.vsts_bookSltAvlSlt = `Book timeslot - booking slot if available`
exports.vsts_bookSltSuc = (bookedSlot) => `Book timeslot successful - booked: ${JSON.stringify(bookedSlot)}`