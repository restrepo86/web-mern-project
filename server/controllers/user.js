const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt');
const User = require('../models/user');

function signUp(req, res) {
    const user = new User();

    console.log(req.body);
    const { name, lastName, email, password, repeatPassword } = req.body;

    user.name = name;
    user.lastName = lastName;
    user.email = email.toLowerCase();
    user.role = 'admin';
    user.active = false;

    if (!password || !repeatPassword) {
        res
            .status(404)
            .send({ message: 'Las contraseñas son obligatorias.' })
    } else {
       if (password !== repeatPassword) {
           res
                .status(404)
                .send({ message: 'Las contraseñas tienen que ser iguales.' });
       } else {

            bcrypt.hash(password, null, null, function(err, hash) {
                if (err) {
                    res
                        .status(500)
                        .send({ message: 'Error al encriptar la contraseña.' });
                } else {
                    user.password = hash;

                    user.save((err, userStored) => {
                        if (err) {
                            res.status(500).send({ message: 'El usuario ya existe.' })
                        } else {
                            if (!userStored) {
                                res.status(404).send({ message: 'Error para crear el usuario.' })
                            } else {
                                res.status(200).send({ user: userStored });
                            }
                        }
                    });
                }
            });
           
       } 
        
    }

};

function signIn(req, res) {
    const params = req.body;
    const email = params.email.toLowerCase();
    const password = params.password;

    User.findOne({ email }, (err, userStored) => {
        if (err) {
            res.status(500).send({ message: 'Error del servidor.' });
        } else {
            if (!userStored) {
                res.status(404).send({ message: 'Usuario no encontrado.' });
            } else {
                bcrypt.compare(password, userStored.password, (err, check) => {
                    if (err) {
                        res.status(500).send({ message: 'Error del servidor.' })
                    } else if(!check) {
                        res.status(404).send({ message: 'La contraseña es incorrecta' })
                    } else {
                        if (!userStored.active) {
                            res.status(200).send({ code: 200, messsage: 'El usuario no se encuentra activo.' });
                        } else {
                            res.status(200).send({ 
                                accessToken: jwt.createAccessToken(userStored),
                                refreshToken: jwt.createRefreshToken(userStored)
                            });
                        }
                    }
                });
            }
        }
    });
};

module.exports = {
    signUp, 
    signIn
}; 