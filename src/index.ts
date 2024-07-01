import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.listen(process.env.port || 3000);

console.log("Server On");