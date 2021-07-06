const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

module.exports = () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  const cors = require('cors');

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT);

  // MIDDLEWARES
  app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Origin", "*");
    
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    req.header("Access-Control-Allow-Methods", 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    app.use(cors());
    
    // Parseia também requisições do tipo HTML - application/x-www-form-urlencoded
    next();
  });

  require('../api/routes/autorRoute')(app);
  require('../api/routes/livroRoute')(app);
  require('../api/routes/usuarioRoute')(app);
  require('../api/routes/loginRoute')(app);

  return app;
};