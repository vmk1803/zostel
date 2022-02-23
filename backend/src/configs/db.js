const mongoose = require("mongoose");
module.exports =()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/zostel')
    // try{
    //     mongoose.connect("mongodb+srv://kirankumarj_meshram:kiran123@cluster0.mmkdj.mongodb.net/myFirstDatabase?retryWrites=true",{
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true
    // })
    // }catch(err){
    //     res.status(500).json({message:err.message,status:"Failed"})
    // }
 }