const express = require("express");

const housesRoute = require('./routes/houses');
const timeSlotsRoute = require('./routes/time_slots');
const app = express();
const dbUtils = require("./utils/db");
const logger = require("./utils/logger");
const logMsgs = require("./static/log_messages");

app.get('/',(req,res)=>{
    return res.status(200).send({
        status: "SUCCESS",
        message: "I am successful :)"
    })
})

app.use(express.urlencoded({extended: 'false'}));
app.use(express.json());

app.use('/houses',housesRoute);
app.use('/timeslots',timeSlotsRoute);

dbUtils.createDBConnection().then(async () => { 
    logger.info(logMsgs.db_createConnection_Suc);
}).catch((err) => {
    logger.error(JSON.stringify(err));
});

const port = process.env.PORT || 5050
app.listen(
    port,
    logger.info(`Server started on port ${port}`)
)

module.exports = app;