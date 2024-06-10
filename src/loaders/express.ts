import { Application } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import passport from 'passport';
import passportConfig from '../config/passport.config';

const expressLoader = async ({ app }: { app: Application }) => {
    // Middleware para procesar datos JSON
    app.use(bodyParser.json());

    // Middleware para registrar solicitudes en la conspassport: passport.PassportStaticola 
    app.use(morgan('dev'));

    // Middleware para permitir solicitudes de dominios diferentes 
    app.use(cors());

    // Middleware para agregar encabezados de seguridad 
    app.use(helmet());

    // Middleware para comprimir las respuestas 
    app.use(compression());

    // Inicializar Passport.js
    app.use(passport.initialize());
    // Configurar Passport.js con la estrategia JWT
    passportConfig();
};

export default expressLoader;
