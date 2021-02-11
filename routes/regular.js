const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.render('index', {
      title: "Home - Online Passport Application",
    })
  });
  app.get('/application', function (req, res) {
    res.render('application', {
      title: "Apply New/Reissue Passport - Online Passport Application",
    })
  });
  app.get('/document', function (req, res) {
    res.render('document', {
      title: "Documents - Online Passport Application",
    })
  });
  app.get('/fee', function (req, res) {
    res.render('fee', {
      title: "Fees - Online Passport Application",
    })
  });
  app.get('/faq', function (req, res) {
    res.render('faq', {
      title: "FAQ - Online Passport Application",
    })
  });
  
  app.get('/about', function (req, res) {
    res.render('about', {
      title: "Contact US - Online Passport Application",
    })
  });
 
  app.get('/pop', function (req, res) {
    res.render('pop', {
      title: "pop",
    })
  });
module.exports = app;