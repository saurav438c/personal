const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")


const control =require("../usercontroller/control")
const BookModel=require("../book/schema")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/BookUser", control.BookUser)

router.get("/getUserBook", control.getUsersBook)


module.exports = router;