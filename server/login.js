
import Router from 'express';
import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
const router = new Router();


const verifyCallback = async (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: `${process.env.APP_ORIGIN}/login/facebook/callback`
  },
  verifyCallback
));


router.get(
  '/login/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

router.get(
  '/login/facebook',
  passport.authenticate('facebook', {
    scope: ['pages_messaging','pages_manage_metadata','pages_show_list','pages_manage_posts'],
  }),
);


router.get('/login/facebook/callback', 
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
    console.log("Callback called");
    return res
        .status(200)
        .redirect('/')
    });



export default router;
