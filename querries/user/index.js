const userModel = require('../../models').userModel;


module.exports = {
    async createUser(data) {
        console.log("Data ",data);
        return await userModel.create(data);
    },
    async getUsers(){
        return await userModel.findAll();
    },
    async getByName(name){
        return userModel.findAll({
            where:{
                name : name
            }
        });
    },
    async getUserById(id){
        return userModel.findOne({
            where:{
                id:id
            }
        })
    }
}