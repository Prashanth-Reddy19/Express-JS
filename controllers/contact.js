const path = require('path');
const rootDir = require('../util/path');

exports.getcontactcontroller=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
  };

  exports.postcontactcontroller=(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  };

  