import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import userModel from '../api/models/usersModel';
import { JWT_SECRET } from './config';
import { JwtPayload } from '../types/jwtTypes';

const passportConfig = (): void => {
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: JWT_SECRET,
      },
      async (payload: JwtPayload, done) => {
        try {
          if (!payload.userId) {
            done(null, false);
            return;
          }

          const user = await userModel.findById(payload.userId);
          done(null, user || false);
        } catch (error) {
          done(error, false);
        }
      },
    ),
  );
};

export default passportConfig;
