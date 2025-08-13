const express = require('express');
const { sequelize } = require('./src/config/configDB');
require('dotenv').config();
const livroRoutes = require('./src/modules/livros/routes/livroRoutes');


const app = express();
const PORT = process.env.PORT
app.use(express.json());
app.use('/livros', livroRoutes);


//await sequelize.sync({ force: true })

sequelize.sync()
  .then(async () => {
    try {
      await sequelize.authenticate();
      console.log('Conexão com o banco de dados estabelecida com sucesso.');
      
      app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
      });
    } catch (error) {
      console.error('Não foi possível conectar ao banco de dados:', error);
    }
  })
  .catch((syncError) => {
    console.error('Erro ao sincronizar com o banco de dados:', syncError);
  });

module.exports = app;

