const { authJwt } = require("../middlewares");
const product = require("../controllers/product.controller");
var router = require("express").Router();
module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    })
    router.post('/products/create', [authJwt.verifyToken, authJwt.isAdmin], product.create)
    router.get('/products', product.findAll)
    router.get('/products/:id', product.findOne)
    router.put('/products/:id', [authJwt.verifyToken, authJwt.isAdmin], product.update)
    router.delete('/products/:id', [authJwt.verifyToken, authJwt.isAdmin], product.delete)
}