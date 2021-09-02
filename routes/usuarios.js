/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {   getUsuarios, criarUsuario, atualizarUsuario } = require('../controllers/usuarios');



const router = Router();


router.get( '/', getUsuarios );

router.post( '/',
    [
        check('name', 'O nome é obrigatório').not().isEmpty(),
        check('password', 'A senha é obrigatoria').not().isEmpty(),
        check('email', 'O email é obrigatório').isEmail(),
        validarCampos,
    ], 
    criarUsuario 
);


router.put( '/:id',
    [
        
        check('name', 'O nome é obrigatório').not().isEmpty(),
        check('password', 'A senha é obrigatoria').not().isEmpty(),
        check('email', 'O email é obrigatório').isEmail(),
        validarCampos,
    ],
    atualizarUsuario
);



module.exports = router;