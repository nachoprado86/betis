import {Router} from 'express';
import {getVascosBetis} from '../controllers/vascosBetisController.js';

const router = Router();

router.get('/', getVascosBetis);


export default router;
