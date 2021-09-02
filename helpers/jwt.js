const jwt = require('jsonwebtoken');

const gerarJWT = ( uid ) => {

    return new Promise( ( resolve, reject ) => {

        const payload = {
            uid,
        };
    
        jwt.sign( payload, process.env.JWT_SECRET, {
            expiresIn: '12h'
        }, ( err, token ) => {
    
            if ( err ) {
                console.log(err);
                reject('Não foi possível gerar jwt');
            } else {
                resolve( token );
            }
    
        });

    });

}


module.exports = {
    gerarJWT
}