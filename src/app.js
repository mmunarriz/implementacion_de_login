import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/sessions.router.js';
import productsRouter from './routes/products.router.js'


const app = express();
const connection = mongoose.connect('mongodb+srv://mmunarriz:C0d3r@cluster0.hymhndd.mongodb.net/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))
app.use(session({
    store: new MongoStore({
        mongoUrl: 'mongodb+srv://mmunarriz:C0d3r@cluster0.hymhndd.mongodb.net/ecommerce',
        ttl: 3600
    }),
    secret: "3c0mm3rc3l0g1n",
    resave: false,
    saveUninitialized: false
}))

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/products', productsRouter);
// catch all route
app.get("*", (req, res) => {
    res.send('Error 404 - Not Found');
});
const server = app.listen(8080, () => console.log("Listening on 8080"))