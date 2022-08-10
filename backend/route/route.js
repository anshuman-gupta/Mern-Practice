const express= require("express")
const router = express.Router()
const Controllers = require("../controller/controllers")

// router.get("/contact",Controllers.getTask)
router.post("/contact/create", Controllers.createform)
router.get("/contact",Controllers.getdetails)

module.exports = router