const Usuario = require("../model/Usuario.js");

require("../model/Usuario.js");

module.exports = () => {
    const usuarioDAO = require('../DAO/UsuarioDAO.js');
    const controller = {};
    
    //Adiciona um usuário
    controller.validadeLogin = function(req, res){
        const body = req.body;
        const usuario = new Usuario(null, body.username, body.password, null);
        
        try {
            if(usuarioDAO.validateLogin(usuario.username, usuario.password)){
                return res.status(200).json({ 'status': 'Success', 'message': 'Login Realizado!', 'data': usuarioDAO.selectLoginUsuario(usuario.username, usuario.password)});
            } else {
                return res.status(400).json({ 'status': 'Failed', 'message': 'Usuario e senha não correspondem.'});
            }
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Falha no login.'});
        }
    }

    return controller;
}