module.exports = app => {
    const controller = require('../controllers/UsuarioController')();

    var router = require("express").Router();

    router.post("/", controller.addUmUsuario);

    router.put("/:id", controller.updateUsuario);

    router.delete("/:id", controller.removeUsuario);

    app.use('/api/user', router);
}