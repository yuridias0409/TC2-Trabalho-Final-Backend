require("../model/Livro.js");


exports.insereLivro = function (livro, userid) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    sqlite.insert('livros', { nome: livro.name, genero: livro.gender, pages: livro.pages, autor: livro.author, usuario: userid });
    sqlite.close();
}

exports.removeLivro = function (id) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    sqlite.delete('livros', { id: id });
    sqlite.close();
}

exports.updateLivro = function (livro) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    sqlite.update('livros', { nome: livro.name, genero: livro.gender, pages: livro.pages, autor: livro.author }, { id: livro.id })
    sqlite.close();
}

exports.selectUmLivro = function (id) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    var rows = sqlite.run("SELECT * FROM livros WHERE id = ?", [id]);
    sqlite.close();
    return rows;
}

exports.selectAllLivros = function (userid) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    var rows = sqlite.run("SELECT * FROM livros WHERE usuario = ?", [userid]);
    sqlite.close();
    return rows;
}

