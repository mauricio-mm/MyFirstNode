import { Router } from 'express';
import path from 'path';

const routes = Router();

routes.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '../public', 'app.html'));
});

export default routes;