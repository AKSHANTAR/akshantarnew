const mongoose=require("mongoose");

const MarSchema = new mongoose.Schema({

    firstround:{
        type:Number,
        required:true
    },
    secondround:{
        type:Number,
        required:true
    },
    thirdround:{
        type:Number,
        required:true
    }
})
module.exports = mongoose.model('Marks',MarSchema);