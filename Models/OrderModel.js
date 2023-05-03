import mongoose from "mongoose";

const OrderSchema=mongoose.Schema(
    {
        userId:{
            type:String,
            required:true,
        },
        name:{
            type:String,
        },
        uploadImages:{
            type:String,
        },
        productId:{
            type:String,
            
        },
        deliveryAddress:{
            type:Object
        },
        price:{
            type:Number
        },
        paymentMod:{
            type:String
        },
        paymentStatus:{
            type:String
        },
        deliveryStatus:{
            type:String
        },
        OrderStatus:{
            type:String
        },
        quantity:{
            type:Number
        }
        

    },
    {timestamps:true}
)

const OrderModel=mongoose.model("Orders",OrderSchema);

export default OrderModel;