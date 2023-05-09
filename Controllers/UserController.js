import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
//get all users

export const getAllUser=async (req,res)=>{
    try {
       let users=await UserModel.find() 

       users=users.map((user)=>{
          const {password,...otherDetails}=user._doc
           return otherDetails
       })
       res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get a user

export const getUser=async (req,res)=>{
    const id=req.params.id
    try {
        
        const user=await UserModel.findById(id)
        if(user)
        {
            const {password,...otherDetails}=user._doc
            res.status(200).json(otherDetails)
        }
        else
        {
            res.status(404).json("No such user found")
        }
        
    } catch (error) {
         res.status(500).json(error)
    }
}

//update a user

export const updateUser=async(req,res)=>{
console.log(req.body);
    const id=req.params.id;
    const {_id,oldPass,password  }=req.body;
    if(oldPass){
        const user=await UserModel.findOne({_id: _id})
       
        if(user){
         const validity=await bcrypt.compare(oldPass, user.password)
           if(!validity){
            res.status(400).json("Old Password didnt match")
           }else{
            if(id===_id ){
                try {
        
                    if(password)
                    {
                      const salt =await bcrypt.genSalt(10)
                      req.body.password= await bcrypt.hash(password,salt) 
                    }
                   const user =await UserModel.findByIdAndUpdate(id,req.body,{new:true})
        
                  const token=jwt.sign({
                    username:user.username,
                    id:user._id
                  },process.env.JWT_KEY,{expiresIn:"1h"})
                   res.status(200).json({user,token})
        
        
                } catch (error) {
                    res.status(500).json(error) 
                }
            }else{
                res.status(403).json("Access denied ! you can update only ypur own profile")
            }
           }
       }}
 


   
}
export const address=async(req,res)=>{
    try {
        const{deliveryAddress,userId}=req.body
        const address={
            address1:deliveryAddress.address1,
            city:deliveryAddress.city,
            state:deliveryAddress.state,
            post:deliveryAddress.post,
            country:deliveryAddress.country
           }
          const data= await UserModel.findByIdAndUpdate({_id:userId},{ $addToSet:{address:address}},{new:true})
          res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}


export const removeaddress=async(req,res)=>{
    try {
        try {
            const {userId,address1}=req.body 

           const data=await UserModel.findOneAndUpdate({_id:userId}, { $pull: { address: { address1: address1 } } },{new:true})
          res.status(200).json(data)
         } catch (error) {
             res.status(500).json(error) 
         }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const deleteUser=async (req,res)=>{
    const id=req.params.id;
    const  {currentUserId,currentUserAdminStatus}=req.body;
    if(currentUserId===id || currentUserAdminStatus){
       try {
          await UserModel.findByIdAndDelete(id)
          res.status(200).json("User deleted successfully")
       } catch (error) {
        res.status(500).json(error) 
        
       }
    }
    else{
        res.status(403).json("Access denied ! you can delete only ypur own profile")
    }
}

export const followUser=async (req,res)=>{
    const id =req.params.id
    const {_id}=req.body;

    if(_id===id){
        res.status(403).json("Action Forbidden")
    }else{
        try {
           const followUser=await UserModel.findById(id) 
           const followingUser=await UserModel.findById(_id)
           if(!followUser.followers.includes(_id)){
               await followUser.updateOne({$push:{followers:_id}})
               await followingUser.updateOne({$push:{following:id}})
               res.status(200).json("user followed")
           }else{
            res.status(403).json("User Already folowed by you")
           }
        } catch (error) {
            console.log(error)
            res.status(500).json(error)  
        }
    }
}
//unfollow user
export const unFollowUser=async (req,res)=>{
    const id =req.params.id
    const {_id}=req.body;

    if(_id===id){
        res.status(403).json("Action Forbidden")
    }else{
        try {
           const followUser=await UserModel.findById(id) 
           const followingUser=await UserModel.findById(_id)
           if(followUser.followers.includes(_id)){
               await followUser.updateOne({$pull:{followers:_id}})
               await followingUser.updateOne({$pull:{following:id}})
               res.status(200).json("user unfollowed")
           }else{
            res.status(403).json("User is not folowed by you")
           }
        } catch (error) {
            res.status(500).json(error)  
        }
    }
}

export const blockUser=async(req,res)=>{
    const userId=req.params.id
    try {
        const user=await UserModel.findByIdAndUpdate({_id:userId},{
            auth:false
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const UnblockUser=async(req,res)=>{
    const userId=req.params.id
    try {
        const user=await UserModel.findByIdAndUpdate({_id:userId},{
            auth:true
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}
