import express from 'express';
import "../passport/local-auth.js"
import controller from '../controllers/controllers.js'
import passport from 'passport';
import {loggWarningFile} from '../utils/logger.js'

const router = express.Router();

//----------- AUTENTICADOR --------------//
function isAuthenticated(req, res, next){
    if (req.isAuthenticated()){
            next()
    } else {
            res.redirect('/signup')
    }
}

//----------- RUTAS --------------//
router.get('/', isAuthenticated, controller.indexGet)

router.get('/signup', controller.singupGet)

router.post('/signup', controller.singupPost,
    passport.authenticate('signup',
        {
        successRedirect: '/login',
        failureRedirect: '/signup',
        passReqToCallback: true,
        })
) 

router.get('/login', controller.loginGet) 

router.post('/login', controller.loginPost,
    passport.authenticate('login',
            {    
            successRedirect: '/',
            failureRedirect: '/login',
            passReqToCallback: true,
            }) 
)

router.get('/logout', isAuthenticated, controller.logoutGet)

router.get('/api/gatos-test', isAuthenticated, controller.gatosGet)

router.use(controller.pageNotFound)


export default router