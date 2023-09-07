const transectionQuery = require("../../querries/transection");

module.exports = {
  async debit(req, res) {
    let amount = req.body.amount;
    let user_Id = req.body.user_Id;
    let receiver_Id = req.body.receiver_Id;
    let ModeOfTransection = req.body.ModeOfTransection;
    let data = {
      amount: amount,
      user_Id: user_Id,
      receiver_Id: receiver_Id,
      ModeOfTransection: ModeOfTransection,
    };
    try {
        let transection = await transectionQuery.debit(data);
        return res.status(200).send({
            code: 200,
            status: "success",
            data: transection,
          });
    } catch (err) {
      return res
        .status(422)
        .send({ code: 422, status: "failed", msg: err.message });
    }
  },
};
