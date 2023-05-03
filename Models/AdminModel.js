import mongoose from "mongoose";
const AdminSchema=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})

const AdminModel=mongoose.model("Admins",AdminSchema)

export default AdminModel