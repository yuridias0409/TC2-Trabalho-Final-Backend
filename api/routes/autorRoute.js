module.exports = app => {
    const controller = require('../controllers/AutorController')();

    var router = require("express").Router();

    router.post("/", controller.addUmAutor);

    router.get("/all/:id", controller.listAllAutores);

    router.put("/:id", controller.updateAutor);

    router.delete("/:id", controller.removeAutor);

    app.use('/api/author', router);
}