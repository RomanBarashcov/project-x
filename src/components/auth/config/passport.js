const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const validators = require('../../../core/utils/validators');
const errors = require('../../../core/constants/errors');
const config = require('./index');
const jwtConfig = require('./jwtConfig');

let repositories = null;

passport.use('register',
new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        rePasswordField: 'rePassword',
        passReqToCallback: true,
        session: false,
      }, async (req, email, password, done) => {
        try {

            if(!validators.hasValueValidator.isValid(email) 
            || !validators.hasValueValidator.isValid(passport) 
            || !validators.hasValueValidator.isValid(req.body.repPassword)) {

              return done(null, false, { 
                message: errors.routeLayer.PASSPORT.FIELDS_SHOULD_BE_NOT_EMPTY
              });

            }

            if(!validators.emailValidator.validate(email)) {

              return done(null, false, { 
                message: errors.routeLayer.PASSPORT.INVALID_EMAIL
              });

            }

            if(!validators.passwordValidator.validate(password)) {

              return done(null, false, { 
                message: errors.routeLayer.PASSPORT.INVALID_PASSWORD
              });

            }

            if(password !== req.body.rePassword) {

              return done(null, false, {
                message: errors.routeLayer.PASSPORT.PASSWORDS_ARE_NOT_EQUALS,
              });

            }

            let user = await repositories.userRepository.getByEmail(email);
            if (user) {

              return done(null, false, {
                message: errors.routeLayer.PASSPORT.EMAIL_WAS_DUBLICATED
              });

            }

            const salt = bcrypt.genSaltSync(config.BCRYPT_SALT_ROUNDS);
            const hashedPassword = bcrypt.hashSync(password, salt);

            let newUser = {
                userName: email,
                hashedPassword: hashedPassword,
                salt: salt
            };

            return done(null, newUser);

        } catch (err) {
          done(null, false, {message: err});
        }
      },
    ),
  );

  passport.use('login', 
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false,
        passReqToCallback: true,
      }, async (req, email, password, done) => {
        try {

            if(!validators.hasValueValidator.isValid(email) 
            || !validators.hasValueValidator.isValid(passport)) {

                return done(null, false, { 
                  message: errors.routeLayer.PASSPORT.FIELDS_SHULD_BE_NOT_EMPTY 
                });

            }

            let user = await repositories.userRepository.getByEmail(email);
            if(!user) {
                return done(null, false, { 
                  message: errors.routeLayer.PASSPORT.INCORRECT_LOGIN_OR_PASSWORD 
                });
            }

            if(!user.password) {

               return done(null, false, { 
                 message: errors.routeLayer.PASSPORT.EMPTY_PASSWORD
                });

            }

            if(!bcrypt.compareSync(password, user.password)) {

                return done(null, false, { 
                  message: errors.routeLayer.PASSPORT.INCORRECT_LOGIN_OR_PASSWORD 
                });

            }

            return done(null, user);

          } catch (err) {
            done(null, false, {message: err});
        }
      },
    ),
  );

  const opts = {
    jwtFromRequest: ExtractJWT.fromHeader('auth-token'),
    secretOrKey: jwtConfig.accessSecret,
  };

  passport.use(
    'jwt',
    new JWTstrategy(opts, async (jwt_payload, done) => {
      try {passport

        if(!jwt_payload.id) {

          return done(null, false, { 
            message: errors.routeLayer.PASSPORT.INCORRECT_TOKEN
          });

        }

        let user = await repositories.userRepository.getByEmail(jwt_payload.email);
        if(user.id !== jwt_payload.id) {

          return done(null, false, { 
            message: errors.routeLayer.PASSPORT.INCORRECT_TOKEN
          });
          
        }

        return done(null, { id: jwt_payload.id });

      } catch (err) {
        done(null, false, {message: err});
      }
    }),
  );

  module.exports = (rep) => {
  
    repositories = rep;

    return {
      passport
    }
}
