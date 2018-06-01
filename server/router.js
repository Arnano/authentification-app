const AuthController = require("./controllers/authentification");

module.exports = app => {
  app.post("/signup", AuthController);
};
