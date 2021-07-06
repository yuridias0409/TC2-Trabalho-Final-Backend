module.exports = app => {
    const controller = require('../controllers/LoginController')();

    var router = require("express").Router();

    router.post("/", controller.validadeLogin);

    app.use('/api/user/login', router);
}