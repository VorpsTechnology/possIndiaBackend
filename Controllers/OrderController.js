import OrderModel from "../Models/OrderModel.js";
import UserModel from "../Models/userModel.js";
import nodemailer from "nodemailer"
export const remove=async(req,res)=>{
  try {
    const {orderId}=req.body
    console.log(req.body);
    const data =await OrderModel.findByIdAndRemove({_id:orderId})

      res.status(200).json(data)
   
    
    
  } catch (error) {
    res.status(500).json(error)
  }
}
export const create=async(req,res)=>{
    try {
        console.log("haiii");  
       let newOrder=OrderModel(req.body)

       const Orders=await newOrder.save()
       const {userId}=req.body
       var Transport=nodemailer.createTransport({
        service:"Gmail",
        auth:{
          user:"possindia21@gmail.com",
          pass:"wykvjbreaetbjxvm"
        }
      })
      var mailOptions;
      let sender="PossIndia"
      mailOptions={
          from:sender,
          to:"possindia21@gmail.com",

          subject:`ORDER PLACED fROM ${Orders.deliveryAddress.firstName} ${Orders.deliveryAddress.lastName}`,
          text:`
          OrderId : ${Orders._id}\n

          UserId : ${Orders.userId}\n

          ProductId : ${Orders.productId}\n
          Postal code : ${Orders.deliveryAddress.post}\n
          State : ${Orders.deliveryAddress.state}\n
          City : ${Orders.deliveryAddress.city}\n
          Email : ${Orders.deliveryAddress.email}\n
          Mobile : ${Orders.deliveryAddress.mobile}\n
          Address : ${Orders.deliveryAddress.address1}\n

          Price : ${Orders.price}\n
          PaymentMod : ${Orders.paymentMod}


          
          `
         
      }
      Transport.sendMail(mailOptions,(err,response)=>{
        if(err){
          console.log(err);
        }else{
          console.log(response);
      }
      })
       res.status(200).json({Orders}) 
    } catch (error) {
        
    }
}


export const getOne=async(req,res)=>{
  try{
    const id =req.params.id
const data=await OrderModel.findOne({_id:id}) 
res.status(200).json(data)
} catch (error) {
 res.status(500).json(error)
}
}


export const all=async(req,res)=>{
    try {
        const {userId}=req.body
      const orderlist1 =await OrderModel.find({userId:userId})
      const orderlist=orderlist1.reverse()
      res.status(200).json({orderlist})
      } catch (error) {
        res.status(500).json(error)
      }
}



export const adminOrders=async(req,res)=>{
  try {
     
    const orderlist1 =await OrderModel.find(
      
      {OrderStatus:{$nin:["CANCELLED", "RETURN", "ACCEPTRETURN","CANCELACCEPTED", "CANCELRETURN"]
        
        }}
      
      )
      
    const orderlist=orderlist1.reverse()
    res.status(200).json({orderlist})
    } catch (error) {
      res.status(500).json(error)
    }
}

export const adminreturn=async(req,res)=>{
  try{
  const orderlist1 =await OrderModel.find({OrderStatus:{$nin:["ORDERED","DISPATCHED","DELIVERED","CANCELLED","REMOVED",""]}})
  const orderlist=orderlist1.reverse()
  res.status(200).json({orderlist})
  } catch (error) {
    res.status(500).json(error)
  }
}
export const cancel=async(req,res)=>{
  try {
    const {orderID}=req.body
  console.log("orderId",orderID);
    const data=await OrderModel.findByIdAndUpdate(orderID,{  OrderStatus:"CANCELLED"},{new:true})
  
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const returnReq=async(req,res)=>{
  try {
    const {orderID}=req.body
  console.log("orderId",orderID);
    const data=await OrderModel.findByIdAndUpdate(orderID,{  OrderStatus:"RETURN"},{new:true})
  
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const cancelledOrders=async(req,res)=>{
  try {
     
    const orderlist2 =await OrderModel.find(
      {OrderStatus:{$in:["CANCELLED", "CANCELACCEPTED"]
        
        }}
      )
    const orderlist=orderlist2.reverse()
    console.log(orderlist2.reverse());
    res.status(200).json({orderlist})
    } catch (error) {
      res.status(500).json(error)
    }
}




 export const changestatus=async(req,res)=>{
    try {
      const {status,orderID}=req.body
      console.log(status);
      const data=await OrderModel.findByIdAndUpdate(orderID,{  OrderStatus:status},{new:true})
  
      res.status(200).json(data)
      
    } catch (error) {
      res.status(500).json(error)
    }
}