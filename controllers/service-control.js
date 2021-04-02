const Service = require('../models/service');
const Second = require('../models/secondservice');
const Mainform = require('../models/mainform');
const Insta = require("instamojo-nodejs");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();

const API_KEY = "test_f4bbc56cf7ed8b53e2b7bf0940e";

const AUTH_KEY = "test_04f795951c48bb0d5cabdf2c2de";

Insta.setKeys(API_KEY, AUTH_KEY);

Insta.isSandboxMode(true);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const control_post = (req, res) => {
  const service = new Service(req.body);
  service.save()
    .then(result => {
      res.redirect('/');
      })
        .catch(err => {
          console.log(err);
          res.render('404')
        });
    }
const control_second = (req, res) => {
  const second = new Second(req.body);
  second.save()
    .then(result => {
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
    Service.find()
      .then(result => {
        res.render('table', { title: 'table view', data: result });
      })
      .catch(err => {
        console.log(err);
      });
  }

  module.exports = {
    control_post,
    control_get,
    control_main,
    control_second
  }
