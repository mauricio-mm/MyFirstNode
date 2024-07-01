import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(routes);

app.listen(process.env.port || 3000);

console.log("Server On");