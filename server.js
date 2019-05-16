const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));

const gmailUser = 'adriandumnici@gmail.com';
const gmailPass = 'rbyxbtpjowisnvzx';

app.post('/contact', function(req, res){
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: gmailUser,
            pass: gmailPass
        }
    })
    mailOpts = {
        from: req.body.name + '&lt;' + req.body.email + '&gt;',
        to: gmailUser,
        subject: 'New message from contact form at portfolio',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}` 
    }
    
    smtpTrans.sendMail(mailOpts, function(er, res){
        if(er) {
            res.render('There was a error sending the message')
        } else {
            res.render('Message sent')
        }
    })
});

app.listen(3000, () =>{
    console.log('server is running')
});