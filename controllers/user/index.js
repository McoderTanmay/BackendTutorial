const userQuery = require('../../querries/user')

module.exports = {
    async createuser(req, res) {
        let name = req.body.name;
        let email=req.body.email;
        let dob=req.body.dob;
        let gender=req.body.gender;
        let data={
            name:name,
            email:email,
            dob:dob,
            gender:gender
        };
        console.log('controller working',name)
        try {
            let user = await userQuery.createUser(data);
            return res
                .status(200)
                .send({
                    code: 200, status: "success", data: user
                });
        } catch (err) {
            console.log(err);
            return res
                .status(422)
                .send({ code: 422, status: "failed", msg: err.message });
        }
    }
}