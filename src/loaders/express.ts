import compression from 'compression';
import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';
import { CORS_ORIGIN, NODE_ENV } from '../config/config';
import passportConfig from '../config/passport.config';

const expressLoader = ({ app }: { app: Application }): void => {
  app.disable('x-powered-by');
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan(NODE_ENV === 'production' ? 'combined' : 'dev'));
  app.use(cors({ origin: CORS_ORIGIN === '*' ? '*' : CORS_ORIGIN.split(',').map((origin) => origin.trim()) }));
  app.use(helmet());
  app.use(compression());

  passportConfig();
  app.use(passport.initialize());
};

export default expressLoader;
