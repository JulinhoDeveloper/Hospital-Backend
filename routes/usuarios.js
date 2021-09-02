/*
    Rota: /api/usuarios
*/
const { Router } = require('express');


const {  criarUsuario } = require('../controllers/usuarios');



const router = Router();




router.post( '/', criarUsuario );




module.exports = router;
