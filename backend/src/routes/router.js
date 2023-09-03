import {Router} from 'express';

import postRouter from './postRouter.js';

import userRouter from './userRouter.js';

import vascosBetisRouter from './vascosBetisRouter.js';

const router = Router();

router.use('/posts', postRouter);

router.use('/', userRouter);

router.use ('/vascos_betis', vascosBetisRouter);

export default router; 