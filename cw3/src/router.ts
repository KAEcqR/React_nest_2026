import {Router, type Request, type Response} from 'express';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const router = Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToIndex  = path.join(__dirname, '../public/index.html');

router.get('/info', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello from info'
    });
});

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Welcome to the server'
    });
});

router.get('/index', async (req: Request, res: Response) => {
    const context = await fs.readFile(pathToIndex, 'utf-8');
    res.status(200).send(context);
});


export default router;