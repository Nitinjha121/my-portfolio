// console.log("check");
const express = require('express');
const app = express();
const compression = require('compression');

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + '/index.html' );
});

app.use(compression());

app.post("/",  (req, res) =>{

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "nitinjhacontact@gmail.com",
          pass: "#ContactEmail90@12445",
        },
    });

    const mailOption = {
        from: req.body.email,
        to:"nitinjhacontact@gmail.com",
        subject:`message from ${req.body.email}: ${req.body.subject}`,
        text:req.body.message,
    }
  transporter.sendMail(mailOption,(error, info) => { console.log("Go")
    if(error) {
        // console.log("get an error",error);
        res.send("error");
    }
    else {
        // connsole.log("all clear",info);
        res.send("sucess")
    }
    })
    
})

app.listen(PORT, ()=>{
    console.log(`Server runnig on port ${PORT}`);
});