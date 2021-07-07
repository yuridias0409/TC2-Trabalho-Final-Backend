const Autor = require("../model/Autor.js");

require("../model/Autor.js");

module.exports = () => {
    const autorDAO = require('../DAO/AutorDAO.js');
    const controller = {};
    
    //Retorna todos os Autores
    controller.listAllAutores = function(req, res){
        const id = req.params.id;
        try {
            return res.status(200).json({ 'status': 'Success', 'data': autorDAO.selectAllAutor(id)});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Nenhum autor encontrado.'});
        }  
    }

    //Adiciona um autor
    controller.addUmAutor = function(req, res){
        const body = req.body;
        const autor = new Autor(null, body.name);
        try {
            autorDAO.insereAutor(autor, body.userid);
            return res.status(200).json({ 'status': 'Success', 'message': 'Autor inserido com sucesso!'});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Falha na inserção do autor.'});
        }
    }

    //Atualiza um autor
    controller.updateAutor = function(req, res){
        const body = req.body;
        const id = req.params.id;

        try {
            autorDAO.updateAutor({id: id, name: body.name});
            return res.status(200).json({ 'status': 'Success', 'message': 'Dados do autor foram atualizados com sucesso!'});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Falha na atualização do autor.'});
        }
    }

    //Remove um autor
    controller.removeAutor = function(req, res){
        const id = req.params.id;
        try {
            autorDAO.removeAutor(id);
            return res.status(200).json({ 'status': 'Success', 'message': 'Autor removido com sucesso!'});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Falha na remoção do autor.'});
        }  
    }

    return controller;
}