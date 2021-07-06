module.exports = app => {
    const controller = require('../controllers/LivroController')();
    
    var router = require("express").Router();

    router.post("/", controller.addUmLivro);

    router.get("/all/:id", controller.listAllLivros);

    router.put("/:id", controller.updateLivro);

    router.delete("/:id", controller.removeLivro);

    app.use('/api/book', router);
}