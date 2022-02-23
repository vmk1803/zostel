const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
    city:{type:String,required:true},
    beds:{type:Number,required:true},
    bedType:{type:String,required:true},
    img1:{type:String,required:true},
    img2:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:true},
    persons:{type:Number,required:true},
    details:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("hotels",hotelSchema);