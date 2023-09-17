import { Router } from 'express';
import productsModel from "../dao/models/products.model.js";

const router = Router();

router.get('/register', (req, res) => {
    res.render('register');
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/login");
});

router.get('/', (req, res) => {
    res.render('profile', {
        user: req.session.user
    });
})

router.get('/products', async (req, res) => {
    const { page = 1 } = req.query;
    const { docs, hasPrevPage, hasNextPage, nextPage, prevPage } = await productsModel.paginate({}, { limit: 8, page, lean: true });
    const products = docs;
    res.render('products', {
        user: req.session.user,
        products,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage
    });
})

export default router;