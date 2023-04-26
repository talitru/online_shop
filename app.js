const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.set('view engine', 'ejs'); // set()- any values globally on our express application.  
app.set('views', 'views'); //we tellin express that we want to compile dynamic templates with the pug/handlebars engine and where to find these templates 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404',{pageTitle:'Page Not Found'});
    //res.status(404).send('<h1>Page not found</h1>');
});

app.listen(port, () => { console.log(`up with port ${port}`) });