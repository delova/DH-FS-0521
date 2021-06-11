//Importando express no arquivo
//import express from 'express'
const express = require('express');

//Criando uma instancia do express
const app = express()

//utilizando o método listen
//mensagem: 'Servidor rodando na porta 3000'
//comando nodemon = refresh aplicação
app.listen(3000, () => 
    console.log('Servidor rodando: http://localhost:3000')
);



