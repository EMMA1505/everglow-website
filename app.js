const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const productsModule = require('./utils/services');

const viewsURL = path.join(__dirname, 'views');

app.set('views', viewsURL);
app.set('view engine', 'ejs');

const publicURL = path.join(__dirname, 'public');

app.use(express.static(publicURL));

app.get('', (req, res) => {
    productsModule.getAllServices((err, services) => {
        if (err) return res.status(500).send(err);
        // console.log(services);
        return res.render('index', { services });
    });
});

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});















