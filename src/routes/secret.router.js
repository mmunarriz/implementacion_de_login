import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.render('profile', {
        user: req.session.user
    });
})

export default router;