
const User=require('../models/userModel');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


module.exports.register=async (req,res)=>{
    try{

        const {username,password,role}=req.body;
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=await User({username,password:hashedPassword,role})
        await newUser.save();
        res.status(201).json({message:`User registered with username ${username}`})
        
    }catch(err){
        res.status(500).json({message:`Something went wrong`})
      
    }


}

module.exports.login=async (req,res)=>{
    try{
        console.log("Login trigger",req.body);
        
        const {username,password}=req.body;
        const user=await User.findOne({username})
      if(!user){
        res.status(404).json({message:`User not Found: ${username}`})

      }
      const isValid=await bcrypt.compare(password,user.password);
      if(!isValid){
        res.status(400).json({message:"Invalid credentials"})
      }
      const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{
        expiresIn:'1h',
      });

      res.status(200).json({token})



}catch(err){
    res.status(500).json({message:`Something went wrong in login ${err}`})

}
  
}


