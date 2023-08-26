const userModel = require('../../models').userModel;

module.exports = {
    async createUser(data) {
        console.log("Data ",data);
        return await userModel.create(data);
    }
}