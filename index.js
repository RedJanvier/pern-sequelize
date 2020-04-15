import { config } from 'dotenv';
import express, { json } from 'express';
import routes from './routes';

config();
const server = express();
const PORT = process.env.PORT || 3300;

server.use(json());

server.use('/api', routes);

server.listen(PORT, console.log(`Server started on http://localhost:${PORT}/api`))

export default server;
