
exports.getSuccessfull=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
  };

  exports.postSuccessfull=(req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
  };