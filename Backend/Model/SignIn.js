const mongoose=require('mongoose');

const {Schema}=mongoose;


const User= new Schema({
   
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
  

});

module.exports=mongoose.model('User',User);
