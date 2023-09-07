const DataTypes = require('sequelize');

module.exports=(db_config)=>{
    const trans = db_config.define(
        'transaction',{
            transaction_id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            amount:{
                type:DataTypes.INTEGER
            },
            user_Id:{
                type:DataTypes.INTEGER,
            },
            ModeOfTransfer:{
                type:DataTypes.STRING
            },
            receiver_Id:{
                type:DataTypes.INTEGER
            },
            type_of_transection:{
                type:DataTypes.STRING
            }
        }
    )
    return trans;
}