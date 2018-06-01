const AuthController = require("./controllers/authentification");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = app => {
  app.get("/", requireAuth, (req, res) => res.send({ Hi: "there" }));
  app.post("/signup", AuthController.signup);
  app.post("/signin", requireSignin, AuthController.signin);
};
