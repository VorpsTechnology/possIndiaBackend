import mongoose from "mongoose";

const ProductSchema=mongoose.Schema(
    {
        name:{
            type:String,
           
        },
        typeCatagory:{
            type:String
        },
        brandCategory:{
           type:String  
        },
        price:{
            type:Number,
       
        },
        maxPrice:{
            type:Number
        },
        desc:{
            type:String,
           
        },
        
        quantity:{
            type:Number,
           

        },
        rating:{
            type:Number,
            default:0
        },
       
        skuId:{
            type:String
        }
        ,
        

        variantType:{
          type:String
        },

        petCategory:{
           type:String
        },
        ageCategory:{
          type:String
        },
        coverImage:{
            type:String
        },
        uploadImages:{
            type:String
        },
       


  
        
      

    },
    {timestamps:true}
)

const productModel=mongoose.model("Products",ProductSchema);

export default productModel;