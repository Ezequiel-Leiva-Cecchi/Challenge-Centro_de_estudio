"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("./config/config");
const mongoose_1 = __importDefault(require("./loaders/mongoose"));
const express_2 = __importDefault(require("./loaders/express"));
const user_routes_1 = __importDefault(require("./api/routes/user.routes")); // Importar las rutas de usuarios
const appointment_routes_1 = __importDefault(require("./api/routes/appointment.routes")); // Importar las rutas de turnos
const appointment_routes_2 = __importDefault(require("./api/routes/appointment.routes")); // Importar las rutas de estudios
// Configurar dotenv para cargar variables de entorno
dotenv_1.default.config();
const app = (0, express_1.default)();
// Cargar la configuración de Express
(0, express_2.default)({ app });
// Configuración de la base de datos MongoDB
(0, mongoose_1.default)();
// Rutas de usuarios
app.use('/api/users', user_routes_1.default);
// Rutas de turnos médicos
app.use('/api/appointments', appointment_routes_1.default);
// Rutas de estudios médicos
app.use('/api/studies', appointment_routes_2.default);
// Inicializar el servidor
app.listen(config_1.PORT, () => {
    console.log(`Server listening on port ${config_1.PORT}`);
});
