import mongoose from "mongoose";
const BannerSchema=mongoose.Schema({
    banerLink:{
        type:String
    }
})

const BannerModel=mongoose.model("Banner",BannerSchema)

export default BannerModel