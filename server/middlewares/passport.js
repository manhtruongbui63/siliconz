const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const { ExtractJwt } = require("passport-jwt");
const { JWT_SECRET } = require("../config/index");

const User = require("../models/User");

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("Authorization"),
      secretOrKey: JWT_SECRET,
    },
    async (payload, done) => {
      try {
        const user = await User.findById(payload.sub);
        if (!user) {
          return done(null, false);
        }
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(
            { message: "Email hoặc mật khẩu không chính xác !" },
            false
          );
        }
        const isCorrectPassword = await user.isValidPassword(password);
        if (!isCorrectPassword) {
          return done(
            { message: "Email hoặc mật khẩu không chính xác !" },
            false
          );
        }
        done(null, user);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);
