const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const server = require("../server").server;
const User = require("../models/user");

afterEach(async () => {
  const cleanUpUser = async () => {
    await User.findOneAndRemove({ email: "borbonalgo@hotmail.com" });
  };
  cleanUpUser();
});

describe("Suite de pruebas auth", () => {
  it("should return 401 when no jwt token available", (done) => {
    chai
      .request(server)
      .get("/auth/login")
      .end((err, res) => {
        chai.assert.equal(res.statusCode, 401);
        done();
      });
  });

  it("should return 201 and token for succesful login", (done) => {
    chai
      .request(server)
      .post("/auth/login")
      .set("content-type", "application/json")
      .send({ email: "borbonalgo@hotmail.com", password: "TorrensPrueba1," })
      .end((err, res) => {
        //Expect valid login
        chai.assert.equal(res.statusCode, 201);
        done();
      });
  });
});
