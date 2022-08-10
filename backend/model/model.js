const mongoose = require("mongoose")
const schema = mongoose.Schema
mongoose.connect("mongodb://localhost:27017/practice").then((res)=>console.log("connecting")).catch((err)=>console.log(err))

const contactschema = new schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    }
})

const contactModel = mongoose.model("contact", contactschema)
module.exports= contactModel
