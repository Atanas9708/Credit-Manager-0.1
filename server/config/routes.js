const controllers = require('../controllers');

module.exports = app => {
  app.post('/register', controllers.user.registerPost);
  app.post('/login', controllers.user.loginPost);

  app.get('/credits/:page', controllers.credit.getPage);
  app.post('/create', controllers.credit.createCredit);
  app.get('/credit/:id', controllers.credit.getCreditDetails);
  app.post('/note/:id', controllers.credit.addNote);
  app.post('/status/:id', controllers.credit.changeStatus);
}