const mongoose=require('mongoose');
// const { collection } = require('./Models/Signup');
const mongoURI ="mongodb+srv://infinikul:Interstellar_2002@cluster0.36xrdpw.mongodb.net/Users?retryWrites=true&w=majority" ;


const db = async()=>{
 
   try{
    await mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true });
     console.log("connected ");

    
    const collection3=mongoose.connection.db.collection("ChatUsers");
    const data=await collection.find({}).toArray();
    

    }catch(err){
        console.log(err);
    }


}
module.exports=db;
