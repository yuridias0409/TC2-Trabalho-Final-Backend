const Livro = require("../model/Livro.js");

require("../model/Livro.js");

module.exports = () => {
    const livroDAO = require('../DAO/LivroDAO.js');
    const controller = {};
    
    //Retorna todos os livros
    controller.listAllLivros = function(req, res){
        const id = req.params.id;
        try {
            return res.status(200).json({ 'status': 'Success', 'data': livroDAO.selectAllLivros(id)});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Livro não encontrado.'});
        }
    }

    //Adiciona um livro
    controller.addUmLivro = function(req, res){
        const body = req.body;
        const livro = new Livro(null, body.name, body.gender, body.pages, body.author);
        try {
            livroDAO.insereLivro(livro, body.userid);
            return res.status(200).json({ 'status': 'Success', 'message': 'Livro inserido com sucesso!'});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Falha na inserção do livro.'});
        }
    }

    //Atualiza um livro
    controller.updateLivro = function(req, res){
        const query = req.query;
        const id = req.params.id;s
        const livro = new Livro(id, query.name, query.gender, query.pages, query.author);
        try {
            livroDAO.updateLivro(livro);
            return res.status(200).json({ 'status': 'Success', 'message': 'Dados do livro foram atualizados com sucesso!'});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Falha na atualização do livro.'});
        }
    }

    //Remove um Livro
    controller.removeLivro = function(req, res){
        const id = req.params.id;
        try {
            livroDAO.removeLivro(id);
            return res.status(200).json({ 'status': 'Success', 'message': 'Livro removido com sucesso!'});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Falha na remoção do livro.'});
        }  
    }


    return controller;
}