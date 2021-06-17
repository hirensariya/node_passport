const Service = require('../models/service');
const Second = require('../models/secondservice');
const Mainform = require('../models/mainform');
const Insta = require("instamojo-nodejs");
const bodyParser = require("body-parser");
const express = require("express");
var nodemailer = require('nodemailer');
var newmailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const control_post = (req, res) => {
  const output = `
  <h4>Name: ${req.body.application_name}</h4>
  <h4>Phone: ${req.body.application_phone}</h4>
  <h4>Email: ${req.body.application_email}</h4>
  `;
  const mail = () => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      auth: {
        user: 'hirensariya000@gmail.com',
        pass: 'hirens4Ar@'
      }
    });

    var mailOptions = {
      from: 'hirensariya000@gmail.com',
      to: 'akash_senjaliya@yahoo.com',
      subject: 'Passportservice.in New Application',
      text: 'New Passport Application.',
      html: output
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('erro to semd mail' + error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
  const service = new Service(req.body);
  service.save()
    .then(result => {
      mail();
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
      res.render('404')
    });
}
const control_second = (req, res) => {
  const output = `
  <h4>Name: ${req.body.application_name}</h4>
  <h4>Phone: ${req.body.application_phone}</h4>
  <h4>Email: ${req.body.application_email}</h4>
  `;
  const mailn = () => {
    var transporter = newmailer.createTransport({
      service: 'gmail',
      secure: false,
      auth: {
        user: 'hirensariya000@gmail.com',
        pass: 'hirens4Ar@'
      }
    });

    var mailOptions = {
      from: 'hirensariya000@gmail.com',
      to: 'akash_senjaliya@yahoo.com',
      subject: 'Passportservice.in New Application',
      text: 'New Passport Application.',
      html: output
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('erro to semd mail' + error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
  const second = new Second(req.body);
  second.save()
    .then(result => {
      mailn();
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
      res.render('404')
    });
}

const control_main = (req, res) => {
  const mainform = new Mainform(req.body);
  mainform.save()
    .then(result => {
      res.redirect('index');
    })
    .catch(err => {
      console.log(err);
      res.render('404')
    });
}

const control_get = (req, res) => {
  Second.find()
    .then(result => {
      res.redirect('table', { title: 'table view', data: result });
    })
    .catch(err => {
      console.log(err);
    });
}


const control_phone = (req, res) => {
  console.log(req.body)
  const second = new Second(
    {
      application_name:req.body.application_name,
      application_phone:req.body.application_phone,
      application_email:req.body.application_email
    }
  );
  second.save()
    .then(result => {
      // mailn();
      // res.redirect('/');
      res.send(result)
    })
    .catch(err => {
      console.log(err);
      res.send(error)
    });
}

module.exports = {
  control_post,
  control_get,
  control_main,
  control_second,
  control_phone
}
