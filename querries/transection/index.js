const transectionModel=require('../../models').transectionModel;
const userModel = require('../../models').userModel;

module.exports={
    async debit(data){
        let record = await userModel.findByPk(data.user_Id);
        let amount = await record.total_amount;
        record.set({
            total_amount:amount - data.amount
        })
        await record.save();
        let receiver_record= await userModel.findByPk(data.receiver_Id)
        console.log("1",data.receiver_Id);
        let receiver_amount = await receiver_record.total_amount;
        receiver_record.set({
            total_amount:receiver_amount + data.amount
        })
        await receiver_record.save();
        return await transectionModel.create(data);
    }
}