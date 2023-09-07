const express=require("express")
const app=express()
app.use(express.json());

const models=require('./models')
const USER_ROUTER=require('./routes/users')
const USER_TRANSACTION=require('./routes/transection')

app.use('/users',USER_ROUTER);
app.use('/transection',USER_TRANSACTION);

app.use("*", (req, res, next) => {
    console.log('app works')
    return res.status(404).send({ code: 404, status: 'failed', data: "Make sure url is correct!!!" });
});

models.db_config
.sync({

}).then(()=>{
    console.log('connected to database')
})
.catch(err => {
    console.log('could not connect to database ',err);
    process.exit();
});

app.listen(3000,()=>{
    console.log('App is runnung on port 3000')
});