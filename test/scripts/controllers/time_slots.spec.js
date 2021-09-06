// Import the dependencies for testing
const chai = require("chai");
const sinon = require("sinon");
const consts = require("../../mockdata/constants");
const app = require("../../../server");
let dbUtils = require("../../../utils/db");
sinon.stub(dbUtils, "createDBConnection").resolves();
const SequelizeMock = require("sequelize-mock");
global.DB_CONN = new SequelizeMock();
dbUtils.createDBConnection.restore();

// Configure chai
chai.use(require("chai-http"));
chai.use(require("chai-uuid"));
chai.should();

// Get available slots
describe("GET /timeslots", () => {

    beforeEach((done) => {
        sinon.stub()
        done();
    });

    afterEach((done) => {
        sinon.restore();
        done();
    });

    it.skip("Get Time Slots: Pass case", (done) => {
        const dbStub = sinon.stub(DB_CONN, "define");
        dbStub.onCall(2).returns({
            belongsTo:sinon.stub()
        })
        dbStub.onCall(3).returns({
            belongsTo:sinon.stub(),
            findAll:sinon.stub().resolves([])
        })

        chai.request(app)
            .get("/timeslots")
            .send()
            .end((err, res) => {
                res.should.have.status(200);
                res.body.message.should.be.equal("SUCCESS")
                res.body.should.be.a("object");
                res.body.slotsAvailable.should.be.a("array");
                done();
            });
    });

    it.skip("Get Time Slots: Fail case - db call failed", (done) => {

        chai.request(app)
            .get("/timeslots")
            .send()
            .end((err, res) => {
                res.should.have.status(503);
                done();
            });
    });
});

// Book a slot
describe("PUT /timeslots", () => {

    beforeEach((done) => {
        sinon.stub()
        done();
    });

    afterEach((done) => {
        sinon.restore();
        done();
    });

    it.skip("Book Time Slot: Pass case", (done) => {
        chai.request(app)
            .put("/timeslots/1")
            .send()
            .end((err, res) => {
                res.should.have.status(200);
                res.body.message.should.be.equal("SUCCESS")
                res.body.should.be.a("object");
                done();
            });
    });

    it.skip("Book Time Slot: Slot not available", (done) => {

        chai.request(app)
            .put("/timeslots/2")
            .send()
            .end((err, res) => {
                res.should.have.status(400);
                res.body.message.should.be.equal("time slot not available");
                done();
            });
    });
    
    it.skip("Book Time Slot: Fail case - db call failed", (done) => {

        chai.request(app)
            .put("/timeslots/3")
            .send()
            .end((err, res) => {
                res.should.have.status(503);
                done();
            });
    });
});
