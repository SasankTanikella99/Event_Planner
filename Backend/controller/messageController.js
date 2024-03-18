import { Message } from "../models/modelSchema.js"

export const sendMessage = async(req, res) => {

    try {
        const {name, email, subject, message} = req.body
        if(!name || !email || !subject || !message){
            return res.status(400).json({msg: "Please fill out all fields"})
        }
        await Message.create({name, email, subject, message})
        res.status(200).json({msg:"Message sent successfully!"})
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.toString() + ": " + error.message
        })

    }
    
}
       
    
