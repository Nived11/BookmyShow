import userSchema from "../models/user.model.js"
import bcrypt from "bcrypt"
import pkg from 'jsonwebtoken';
import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "8f9d08ce894c6c",
      pass: "0d7a082578a8c4",
    },
  });
const {sign}=pkg
export async function addUser(req,res) {
   const {username,email,password,cpassword}=req.body;
   console.log(username,email,password,cpassword);
   //check fields are empty
   if(!(username&&email&&password&&cpassword))
    return(res.status(404).send({msg:"fields are empty"}));
//compare password and confirm password 
   if(password!==cpassword)
    return(res.status(404).send({msg:"password not match"}));
//check email already exist
const data=await userSchema.findOne({email})
if(data)
    return(res.status(404).send({msg:"Email already exist try another mail"}));
//convert password to hashed
const hpassword=await bcrypt.hash(password,10)
console.log(hpassword);
// create user
await userSchema.create({username,email,password:hpassword}).then(()=>{
    res.status(201).send({msg:"successfully created"})
}).catch((error)=>{
    res.status(500).send({error})
})
}


export async function loginUser(req,res) {
    const {email,password}=req.body;
    if(!(email&&password))
        return res.status(404).send({msg:"Fields are empty"});
    const user=await userSchema.findOne({email})
    if(user==null)
        return res.status(404).send({msg:"email is not valid"});
    const success=await bcrypt.compare(password,user.password)
    console.log(success);
    const token=await sign({userID:user._id},process.env.JWT_KEY,
        {expiresIn:"24h"})
    res.status(200).send({msg:"successfully loged in",token})
}


export async function Home(req,res){
    try{
        console.log("end point");

        console.log(req.user);
        const _id=req.user.userID;
        const user=await userSchema.findOne({_id});
        res.status(200).send({username:user.username,profile:user.profile})  
    }catch(error){
        res.status(400).send({error})
    }
}


export async function emailverification(req,res){
    console.log(req.body);

    try{
        const info = await transporter.sendMail({
            from: 'xahigay502@evusd.com', // sender address
            to: req.body.email, // list of receivers
            subject: "verify", // Subject line
            text: "verify your email", // plain text body
            html: "<a href='http://localhost:3000/pages/emailverify.html'><button> verify</button></a>", // html body
          });
        
          console.log("Message sent: %s", info.messageId);
          res.status(200).send({msg:"check your email"})

    }catch(error){
            res.status(400).send({error})
        }
        
}