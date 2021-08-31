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

describe("GET /houses", () => {

    beforeEach((done) => {
        sinon.stub()
        done();
    });

    afterEach((done) => {
        sinon.restore();
        done();
    });

    it("Get Houses: Pass case", (done) => {
        sinon.stub(fileSystem,"readFileSync").returns(JSON.stringify(consts.mockHousesData))

        chai.request(app)
            .get("/houses")
            .send()
            .end((err, res) => {
                res.should.have.status(200);
                res.body.message.should.be.equal("SUCCESS")
                res.body.should.be.a("object");
                res.body.listOfHouses.should.be.a("array");
                done();
            });
    });

    it("Get Houses: Fail case - file reading failed", (done) => {
        sinon.stub(fileSystem,"readFileSync").throws(Error("File reading failed"))

        chai.request(app)
            .get("/houses")
            .send()
            .end((err, res) => {
                res.should.have.status(503);
                done();
            });
    });
});
