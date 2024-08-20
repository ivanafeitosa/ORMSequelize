const jwt = require('jsonwebtoken');


const authenticationToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null){
        return res.status(401).json({message: `Usuário não autorizado`})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, dados) => {
        if(err){
            return res.status(403).json({message: `Token inválido`});
        }

        req.dados = dados; //variável dentro da req que irá receber os dados decodificados
        next()
    });
};

module.exports = authenticationToken;