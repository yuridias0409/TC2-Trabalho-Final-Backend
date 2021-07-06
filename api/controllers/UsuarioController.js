const Usuario = require("../model/Usuario.js");

require("../model/Usuario.js");

module.exports = () => {
    const usuarioDAO = require('../DAO/UsuarioDAO.js');
    const controller = {};

    //Adiciona um usuário
    controller.addUmUsuario = function(req, res){
        const body = req.body;
        const usuario = new Usuario(null, body.username, body.password, body.email);
        try {
            if(usuarioDAO.usernameValidation(usuario.username)){
                usuarioDAO.insereUsuario(usuario);                
                return res.status(200).json({ 'status': 'Success', 'message': 'Usuario inserido com sucesso!', 'data': usuarioDAO.selectUmUsuarioWithUsername(usuario.username)});
            } else {
                return res.status(400).json({ 'status': 'Failed', 'message': 'Username em uso.'});
            }
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Falha na inserção do usuario.'});
        }
    }

    //Atualiza um usuário
    controller.updateUsuario = function(req, res){
        const query = req.query;
        const id = req.params.id;
        const usuario = new Usuario(id, query.username, query.password, query.email);
        try {
            usuarioDAO.updateUsuario(usuario);
            return res.status(200).json({ 'status': 'Success', 'message': 'Dados do usuario foram atualizados com sucesso!'});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Falha na atualização do usuario.'});
        }
    }

    //Remove um usuário
    controller.removeUsuario = function(req, res){
        const id = req.params.id;
        try {
            usuarioDAO.removeUsuario(id);
            return res.status(200).json({ 'status': 'Success', 'message': 'Usuario removido com sucesso!'});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Falha na remoção do usuario.'});
        }
    }

    return controller;
}