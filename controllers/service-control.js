const Service = require('../models/service');
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

      var name = req.body.application_name;
      var email = req.body.application_email;
      var phone = req.body.application_phone;
      var amount = req.body.amount;
      Insta.isSandboxMode(true);
      const REDIRECT_URL = "http://passportservice.in";
      var data = new Insta.PaymentData();
      data.send_email = "True";
      data.name = name;
      data.amount = amount;
      data.phone = phone;
      data.amount = amount;
      data.purpose = "Test-passport";            // REQUIRED
      data.email = email;                // REQUIRED
      data.setRedirectUrl(REDIRECT_URL);

      Insta.createPayment(data, function (error, response) {
        if (error) {
          // some error
        } else {
          // Payment redirection link at response.payment_request.longurl
          console.log(response);
          const responseData = JSON.parse(response);
          console.log(responseData);
          const redirectUrl = responseData.payment_request.longurl;
          console.log(redirectUrl);
          // res.status( 200 ).json( redirectUrl );
          res.redirect(redirectUrl);
        }

      });
        // res.redirect('index');
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
    control_main
  }
