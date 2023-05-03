import mongoose from "mongoose";
const BlogSchema=mongoose.Schema({
    image:{
        type:String
    },
    title:{
        type:String
    },
    content:{
       type:String
    },
    desc:{
        type:String
    }
})

const BlogModel=mongoose.model("Blog",BlogSchema)

export default BlogModel