const userQuery = require("../../querries/user");
const authQuery = require("../../querries/auth");
const bcrypt = require("bcrypt");
const auth = require("../../querries/auth");

module.exports = {
  // Signin part

  async signIn(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;
    if (!email && !name && !password) {
      return res.status(422).send({ message: "Invalid credentials" });
    }
    password = await bcrypt.hash(password, 10);
    let data = {
      name: name,
      email: email,
      password: password,
    };
    try {
      //if user already exist
      let checkEmail=await authQuery.getUserByEmail(email)
      if (checkEmail) {
        return res.status(400).send({
          code: 400,
          status: "failed",
          msg:"User already exist"
        })
      }
      let user = await userQuery.createUser(data);
      return res.status(200).send({
        code: 200,
        status: "success",
        data: user,
      });
    } catch (err) {
      return res
        .status(422)
        .send({ code: 422, status: "failed", msg: err.message });
    }
  },
  // login part
  async login(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    try {
      let authData = await authQuery.getUserByEmail(email);
      bcrypt.compare(password,authData.password).then((result)=>{
        if (result) {
          return res.status(200)
          .send({ code: 200, status:"successful", data: authData})
        }
        return res
        .status(400)
        .send({ code:400, status: "failed", msg: "Incorrect password" })
      })
    } catch (err) {
      return res
        .status(404)
        .send({ code: 404, status: "failed", msg: "Incorrect email" });
    }
  },
};

