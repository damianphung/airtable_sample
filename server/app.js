import { Router } from 'express';
import passport from 'passport';
import login from './login';

const router = new Router();

router.use(passport.initialize());

passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});


router.use(passport.session());
router.use(login);

export default router;