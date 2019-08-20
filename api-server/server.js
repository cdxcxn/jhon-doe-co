const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const router = express.Router();
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

router.route('/products')
    .get((req, res) => {
        const dataJsonPath = './data/products.json'
        const rawdata = fs.readFileSync(dataJsonPath);
        const products = JSON.parse(rawdata);
        console.log('api/products consumed!');
        res.json(products);
    });

router.route('/products/:category')
    .get((req, res) => {
        const categoryRequested = req.params && req.params.category;
        const dataJsonPath = './data/products.json'
        const rawdata = fs.readFileSync(dataJsonPath);
        const products = JSON.parse(rawdata);
        const filteredProducts = products.filter(
            (product) => product.categories.find(
                (category) => category === categoryRequested
                )
            );

        console.log(`api/products/${categoryRequested} consumed!`);
        res.json(filteredProducts);
    });

app.use('/api', router);

app.listen(port);
console.log('Server started at port ' + port);