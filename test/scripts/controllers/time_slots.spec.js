// Import the dependencies for testing
const chai = require("chai");
const sinon = require("sinon");
const consts = require("../../mockdata/constants");
const app = require("../../../server");
const fileSystem = require("fs");

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

    it("Get Time Slots: Pass case", (done) => {
        sinon.stub(fileSystem,"readFileSync")
            .onCall(0).returns(JSON.stringify(consts.mockHousesData))
            .onCall(1).returns(JSON.stringify(consts.mockVisitAvailability))
        chai.request(app)
            .get("/timeslots")
            .send()
            .end((err, res) => {
                res.should.have.status(200);
                res.body.message.should.be.equal("SUCCESS")
                res.body.should.be.a("object");
                res.body.slotsAvailable.should.be.a("object");
                done();
            });
    });

    it("Get Time Slots: Fail case - file reading failed", (done) => {
        sinon.stub(fileSystem,"readFileSync").throws(Error("File reading failed"))

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

    it("Book Time Slot: Pass case", (done) => {
        sinon.stub(fileSystem,"readFileSync")
            .onCall(0).returns(JSON.stringify(consts.mockHousesData))
            .onCall(1).returns(JSON.stringify(consts.mockVisitAvailability))
        chai.request(app)
            .put("/timeslots/1")
            .send()
            .end((err, res) => {
                console.log(res)
                res.should.have.status(200);
                res.body.message.should.be.equal("SUCCESS")
                res.body.should.be.a("object");
                done();
            });
    });

    it("Book Time Slot: Slot not available", (done) => {
        sinon.stub(fileSystem,"readFileSync")
            .onCall(0).returns(JSON.stringify(consts.mockHousesData))
            .onCall(1).returns(JSON.stringify(consts.mockVisitAvailability))

        chai.request(app)
            .put("/timeslots/2")
            .send()
            .end((err, res) => {
                res.should.have.status(400);
                res.body.message.should.be.equal("time slot not available");
                done();
            });
    });
    
    it("Book Time Slot: Fail case - file reading failed", (done) => {
        sinon.stub(fileSystem,"readFileSync").throws(Error("File reading failed"))

        chai.request(app)
            .put("/timeslots/3")
            .send()
            .end((err, res) => {
                res.should.have.status(503);
                done();
            });
    });
});
