import mongoose from "mongoose";
const BookingSchema=mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    bookingType:{
        type:String
    },
    Daddress:{
        type:String
    },
    zip:{
        type:String
    },
    time:{
        type:String
    },
    date:{
        type:String
    },
    email:{
        type:String
    }
})

const BookingModel=mongoose.model("Bookings",BookingSchema)

export default BookingModel