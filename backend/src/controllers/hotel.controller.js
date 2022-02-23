const express = require("express");

const router = express.Router();

const Hotel = require("../models/hotel.model")

router.post("", async (req,res)=>{
  try{
    const hotel = await Hotel.create(req.body);
    return res.status(200).send(hotel)
    }catch(err){
        console.log(err)
        res.status(500).json({message:err.message,status:"Failed"})
    }
    
})


router.get("", async (req,res)=>{

    try{
        const hotels = await Hotel.find().lean().exec();
    return res.status(201).send(hotels)
    }catch(err){
        res.status(500).json({message:err.message,status:"Failed"})
    }
    
});

router.patch("/:id", async (req,res)=>{

    try{
        const hotel= await Hotel.findByIdAndUpdate(req.params.id).lean().exec();
    return res.status(201).send(hotel)
    }catch(err){
        res.status(500).json({message:err.message,status:"Failed"})
    }
    
});

router.delete("/:id", async (req,res)=>{

    try{
        const hotel=await Hotel.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send(hotel)
    }catch(err){
        res.status(500).json({message:err.message,status:"Failed"})
    }
    
});

 

module.exports=router;