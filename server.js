const express = require("express");

const housesRoute = require('./routes/houses');
const timeSlotsRoute = require('./routes/time_slots');
const app = express();

app.get('/',(req,res)=>{
    return res.status(200).send({
        status: "SUCCESS",
        message: "I am successful :)"
    })
})

app.use(express.urlencoded());
app.use(express.json());

app.use('/houses',housesRoute);
app.use('/timeslots',timeSlotsRoute);


const port = process.env.PORT || 5050
app.listen(
    port,
    console.log(`Server started on port ${port}`)
)

module.exports = app;