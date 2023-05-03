import BookingModel from "../Models/bookingModel.js"
import nodemailer from "nodemailer"

export const add=async(req,res)=>{
    console.log("haiii");
    try {
        const {username,email,time,date}=req.body
        console.log(username,email,time,date);
        let newTicket=BookingModel(req.body)
              
        // const user= await PractiseModel.find({createrId:createrId})
          console.log("koiiii",newTicket);  
    
            const Ticket=await newTicket.save()

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
          subject:"Booking request",
          text:`
          First name :${req.body.firstName},
          Last name :${req.body.lastName},
          Email :${req.body.email},
          Mobile :${req.body.mobile},
          BookingType :${req.body.bookingType},
          Daddress :${req.body.Daddress},
          State:${req.body.state},
          City :${req.body.city},
          Zip :${req.body.zip},


          
          
          `
   
      }
  
  
      Transport.sendMail(mailOptions,(err,response)=>{
        if(err){
          console.log(err);
        }else{
          console.log(response);
      }

    })

            
            
            res.status(200).json({Ticket})  
    } catch (error) {
        res.status(500).json(error)
    }
}