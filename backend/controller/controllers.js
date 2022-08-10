const contactModel = require("../model/model")

const Controllers = {}

Controllers.createform= async function(req, res){
    const data= req.body
    try{
        let result = await contactModel.create({
            name:data.name,
            email:data.email,
            phone:data.phone
        })
    res.send(result)
    }
    catch(err){
        res.send(err)
    }
    return;
}


Controllers.getdetails= async function(req, res){
    return contactModel.find().then((result)=>res.send(result)).catch((err)=>res.send("some error occurd"))
}

module.exports = Controllers