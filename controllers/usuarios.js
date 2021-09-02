const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');





const criarUsuario = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        const existeEmail = await Usuario.findOne({ email });

        if ( existeEmail ) {
            return res.status(400).json({
                ok: false,
                msg: 'E-mail já cadastrado'
            });
        }

        const usuario = new Usuario( req.body );
    
        // Senha criptografada
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );
    
    
        // Salvar usuário
        await usuario.save();

        // Gerar  TOKEN - JWT
        const token = await generarJWT( usuario.id );


        res.json({
            ok: true,
            usuario,
            token
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Erro inesperado... revisar logs'
        });
    }


}







module.exports = {
   
    criarUsuario
}