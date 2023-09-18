const userModel = require('../../models').userModel;

module.exports = {
    async getUserByEmail(email)
    {
        return userModel.findOne({
            where:{
                email:email
            }
        })
    }
}