import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import userModel from '../models/usersModel';  
import { JWT_SECRET } from '../config/config';  
import { JwtPayload } from '../types/jwtTypes';

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables.");  
}

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  
    secretOrKey: JWT_SECRET,  
};

// Configuración de Passport con la estrategia JWT
const passportConfig = () => {
    passport.use(
        new JwtStrategy(options, async (payload: JwtPayload, done) => {
            try {
                const user = await userModel.findById(payload.patientId);  
                if (user) {
                    return done(null, user);  
                } else {
                    return done(null, false); 
                }
            } catch (error) {
                return done(error, false);  
            }
        })
    );
};

export default passportConfig;  
