import mongoose from "mongoose"
import validator from "validator"

const message = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Please enter a name"],
        minLength: [3, "Name must be atleast 3 characters"]
    },
    email:{
        type:String,
        required: [true, "Please enter an email"],
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    subject:{
        type:String,
        required: [true, "Please enter subjct"],
        minLength: [5, "Name must be atleast 5 characters"]
    },
    message:{
        type:String,
        required: [true, "Please enter the message"],
        minLength: [10, "Name must be atleast 10 characters"]
    }
}) 

export const Message = mongoose.model("Message",message)

