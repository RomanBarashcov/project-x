const express = require('express');
const router = express.Router();

let services = null;
let passport = null;

router.post('/login', (req, res, next) => {

  passport.authenticate('login', async (err, user, info) => {

      if (err) {
        console.error(`error ${err}`);
      }

      if (info !== undefined) {

        if (info.message === 'bad username') {

          return res.status(401).send({message: info.message});

        } else {

          return res.status(403).send({message: info.message});

        }

      } else {

        let result = await services.authService.login.execute(user);
        res.status(200).send({
          auth: true,
          user: result.user,
          accessToken: result.accessToken,
          accessTokenExpiresIn: result.accessTokenExpiresIn,
          message: 'Success login'
        });

      }
  })(req, res, next);
});

router.post('/logout', (req, res, next) => {

  passport.authenticate('jwt', async (err, userId, info) => {

    if (err) {
      console.error(`error ${err}`);
    }

    if (info !== undefined) {

      if (info.message === 'bad username') {

        return res.status(401).send({message: info.message});

      } else {

        return res.status(403).send({message: info.message});

      }

    } else {

      res.status(200).send({
        auth: false,
        userId:  userId,
        accessToken: "",
        accessTokenExpiresIn: 0,
        message: 'Success logout'
      });

    }
  })(req, res, next);

});

router.post('/registration', (req, res, next) => {

  passport.authenticate('register', async (err, user, info) => {


    if (err) {
      console.error(err);
    }

    if (info !== undefined) {

      return res.status(403).send({message: info.message});

    } else {

      let result = await services.authService.registrate.execute(user);
      res.status(200).send({
        data: result,
        message: 'Success registration',
      });
      
    }
  })(req, res, next);

});

module.exports = (ser, pas) => {

    services = ser
    passport = pas;

    return {
        router
    }
}
