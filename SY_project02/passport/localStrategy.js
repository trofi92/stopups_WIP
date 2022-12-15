const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const { decrypt } = require("../middlewares/crypto");

module.exports = () => {
  passport.use(
    "local",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        session: true,
      },
      async (email, password, done) => {
        try {
          // Find all users in the database.
          const users = await User.findAll({
            attributes: ["email", "name", "password"],
          });

          // Find the user with the matching email.
          const user = users.find(
            (user) => email === decrypt(user.email)
          );

          // If no user was found, return an error message.
          if (!user) {
            return done(null, false, {
              message: "가입되지 않은 회원입니다.",
            });
          }

          // If the user was found, compare the provided password to the hashed
          // password in the database.
          const result = password === decrypt(user.password);

          // If the passwords match, return the user object. Otherwise, return
          // an error message.
          if (result) {
            return done(null, user);
          } else {
            return done(null, false, {
              message: "비밀번호가 일치하지 않습니다.",
            });
          }
        } catch (error) {
          // If an error occurred while finding the user or comparing the
          // passwords, return the error.
          return done(error);
        }
      }
    )
  );
};
