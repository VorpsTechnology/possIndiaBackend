import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import BookingRoute from "./Routes/BookingRoute.js"
import ShopifyRoute from "./Routes/ShopifyRoute.js"
import AuthRoute from "./Routes/AuthRoute.js"
import ProductRoute from "./Routes/ProductRoute.js"
import WishlistRoute from "./Routes/WishListRoute.js"
import ConnectRoute from "./Routes/ConnectRoute.js"
import QueeRoute from "./Routes/QueeRoute.js"
import ListRoute from "./Routes/ListRoute.js"
import UploadRoute from "./Routes/UploadRoute.js"
import BannerRoute from "./Routes/BannerRoute.js"
import OrderRoute from "./Routes/OrderRoute.js"
import PaymentRoute from "./Routes/PaymentRoute.js"
import ShippingRoute from "./Routes/shippingRoute.js"
import ContactRoute from "./Routes/contactRoute.js"
import BlogRoute from "./Routes/BlogRoute.js"
import AdminRoute from "./Routes/AdminRoute.js"
const app=express();

app.use(express.static("public"))
app.use("images",express.static("images"))
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
 
app.use(cors())
dotenv.config() 


mongoose.connect(process.env.MONGO_DB,
    {useNewUrlParser:true,useUnifiedTopology:true}
    ).then(()=>{
        app.listen(process.env.PORT,()=>console.log("Listening @",process.env.PORT))
    }).catch((err)=>{
       console.log(err);
    })

app.get("/test",(req,res)=>{
    res.send("hello ")
})
    app.use("/auth",AuthRoute)  
    app.use("/product",ProductRoute) 
    app.use("/wishlist",WishlistRoute) 
     app.use("/order",OrderRoute) 
     app.use("/payment",PaymentRoute) 
    // app.use("/track",AuthRoute) 
   app.use("/banner",BannerRoute)
    app.use('/upload',UploadRoute)
    app.use('/booking',BookingRoute)
    app.use('/shipping',ShippingRoute)

    app.use('/contact',ContactRoute)
    app.use('/blog',BlogRoute)
    app.use("/admin",AdminRoute)



    