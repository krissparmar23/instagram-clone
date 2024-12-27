const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {jwt_secret} = require("../keys");
const requireLogin = require("../middlewares/requireLogin");

router.get('/', (req, res) => {
    res.send("hello")
})

router.post("/signup", (req, res) => {
    const { name, userName, email, password } = req.body;
    if (!name || !email || !userName || !password) {
        res.status(422).json({ error: "please add all the fields" })
    }
    USER.findOne({ $or: [{ email: email }, { userName: userName }] }).then((savedUser) => {
        if (savedUser) {
            return res.status(422).json({ error: "email and userName already exists" })
        }
        bcrypt.hash(password, 12).then((hashedPassword) => {
            const user = new USER({
                name,
                userName,
                email,
                password: hashedPassword,
            })
            user.save()
                .then(user => { res.json({ message: "register successfully" }) })
                .catch(err => {
                    console.log(err);
                })
        })
    })
})

router.post("/signin", (req, res) => {
   const {email, password} = req.body;
   if(!email || !password){
      return res.status(422).json({error: "please add email and password"});
   }
   USER.findOne({email: email}).then((savedUser)=> {
      if(!savedUser){
         return res.status(422).json({error: "invalid email"});
      }
      
      bcrypt.compare(password, savedUser.password).then((match) => {
         if(match){
            // return res.status(200).json({message: "successfully signed in"})
            const token = jwt.sign({_id: savedUser.id}, jwt_secret)
            res.json(token);
            
         }else{
            return res.status(422).json({message: "Invalid password"})
         }
      }).catch((err)=> console.log(err)
      )
   })
})

module.exports = router;