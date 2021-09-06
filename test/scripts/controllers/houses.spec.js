// Import the dependencies for testing
const chai = require("chai");
const sinon = require("sinon");
const consts = require("../../mockdata/constants");
let dbUtils = require("../../../utils/db");
sinon.stub(dbUtils, "createDBConnection").resolves();
const SequelizeMock = require("sequelize-mock");
global.DB_CONN = new SequelizeMock();
const app = require("../../../server");
dbUtils.createDBConnection.restore();

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
        DB_CONN.define.restore();
        sinon.restore();
        done();
    });

    it("Get Houses: Pass case", (done) => {
		const dbStub = sinon.stub(DB_CONN, "define");
        dbStub.onCall(2).returns({
            belongsTo:sinon.stub(),
            findAll: sinon.stub().resolves(consts.mockHousesData)
        })
        dbStub.onCall(3).returns({belongsTo:sinon.stub()})

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

    it.skip("Get Houses: Fail case - db call failed", (done) => {
        const dbStub = sinon.stub(DB_CONN, "define");
        dbStub.onCall(2).returns({
            belongsTo:sinon.stub(),
            findAll: sinon.stub().rejects("Error")
        })
        dbStub.onCall(3).returns({belongsTo:sinon.stub()})

        chai.request(app)
            .get("/houses")
            .send()
            .end((err, res) => {
                res.should.have.status(503);
                done();
            });
    });
});
