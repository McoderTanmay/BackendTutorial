const userQuery = require("../../querries/user");

module.exports = {
  async createuser(req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let dob = req.body.dob;
    let gender = req.body.gender;
    let total_amount = req.body.total_amount;
    let data = {
      name: name,
      email: email,
      dob: dob,
      gender: gender,
      total_amount: total_amount
    };
    try {
      let user = await userQuery.createUser(data);
      return res.status(200).send({
        code: 200,
        status: "success",
        data: user,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(422)
        .send({ code: 422, status: "failed", msg: err.message });
    }
  },
  async getUsers(req, res) {
    try {
      let user = await userQuery.getUsers();
      return res.status(200).send({
        code: 200,
        status: "success",
        data: user,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(422)
        .send({ code: 422, status: "failed", msg: err.message });
    }
  },
  async getByName(req, res) {
    let name = req.body.name;
    try {
      let user = await userQuery.getByName(name);
      return res.status(200).send({
        code: 200,
        status: "success",
        data: user,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(422)
        .send({ code: 422, status: "failed", msg: err.message });
    }
  },
};
