const express = require("express");
// const router = express.Router();
const router = require("express-promise-router")();
const UserController = require("../controllers/user");
const { validateParam, schemas } = require("../helpers/routerHelpers");
const passport = require("passport");
const passportConfig = require("../middlewares/passport");

router.route("/").get(UserController.getAll).post(UserController.postNewUser);

router
  .route("/signin")
  .post(
    passport.authenticate("local", { session: false }),
    UserController.signIn
  );
router.route("/signup").post(UserController.signUp);
router
  .route("/secret")
  .get(passport.authenticate("jwt", { session: false }), UserController.secret);

router
  .route("/:userID")
  .get(validateParam(schemas.idSchema, "userID"), UserController.getUser)
  .put(UserController.replaceUser)
  .patch(UserController.updateUser);

router
  .route("/:userID/decks")
  .get(UserController.getUserDeck)
  .post(UserController.postUserDeck);

module.exports = router;
