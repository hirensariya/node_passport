const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.render('index', {
      title: "Apply Passport Online - Trusted Passport Services",
      descrition: "Looking for a Passport? Lost, Expired or New Passport. All services related to Passport avail at one place. Get Easy andQuick Service with lowest price. Contact Now.",
      
    })
  });
  app.get('/application', function (req, res) {
    res.render('application', {
      title: "Apply for New Paasport‎ - Online Passport Application Form",
      descrition:"Meta Description - Apply Online New/Reissue, Tatkal, Child, Adult PASSPORT at Low Price. Now leave all the complications of Online Application to us. Submit Your Passport Application Now! ",
    })
  });
  app.get('/document', function (req, res) {
    res.render('document', {
      title: "Check the Required Documents for Passport Application - passportservice.in",
      descrition:"Meta Description - Documents Required for Applying Passport Online. Must Require Documents - Proof of Identity Aadhar Card, Pan Card, Driving License, Birth Certificate, e.t.c",
    })
  });
  app.get('/fee', function (req, res) {
    res.render('fee', {
      title: "Online Passport Fees | Passport Fee Renewal | Passport Fees Tatkal",
      descrition:"Meta Description - New Passport / Renewal of Passport Fee - Getting a Passport is Easy Now. Just Submit Your Form and We will Take Care the Rest. Most Economical Price. Easy and Quick Service. Trusted by Thousands",
    })
  });
  app.get('/faq', function (req, res) {
    res.render('faq', {
      title: "Online Passport Services: FAQ - Passportservice.in",
      descrition:"Meta Description - Passport Services FAQ: What is Passport, How to Apply, Tatkal Application, Documents, Fees e.t.c. Here are the steps, fee structure, documentation required!",
    })
  });
  
  app.get('/about', function (req, res) {
    res.render('about', {
      title: "Contact Us for Online Passport Services - Passportservice.in",
      descrition:"Meta Description - For more information about Online Passport Application Form & Passport services, Please call us and Email Us to Get Your Queries Answered.",
    })
  });
 
  app.get('/pop', function (req, res) {
    res.render('pop', {
      title: "pop",
    })
  });


  app.get('/*', function (req, res) {
    res.render('404', {
      title: "404",
      descrition:"404 - page not found, Wrong Url",
    })
  });
module.exports = app;