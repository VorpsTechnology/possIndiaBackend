import express from  "express"
import nodemailer from "nodemailer"
const router =express.Router();

router.post("/callback",(req,res)=>{
    console.log("haiii");
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
          subject:"Contact request",
          text:`
          First name :${req.body.firstName},
          Last name :${req.body.lastName},
          Email :${req.body.email},
          Mobile :${req.body.mobile},
          Message :${req.body.message},

          
          
          `
   
      }
  
  
      Transport.sendMail(mailOptions,(err,response)=>{
        if(err){
          console.log(err);
        }else{
          console.log(response);
          res.status(200).json(response)
      }
      })
})


export default router