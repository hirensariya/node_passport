const Service = require('../models/service');
const Mainform = require('../models/mainform');


const control_post = (req, res) => {
    const service = new Service(req.body);
    service.save()
      .then(result => {
        res.redirect('table');
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
        res.redirect('table');
      })
      .catch(err => {
          console.log(err);
          res.render('404')
      });
}
  
const control_get = (req, res) => {
    Service.find()
      .then(result => {
          res.render('table', { title:'table view', data: result });
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
  