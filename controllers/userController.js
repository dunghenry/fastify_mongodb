const User = require('../models/user.model');
const userController = {
    getUsers: (req, reply) => {
        User.find({}, (err, users) => {
            if (!err) {
                reply.send(users);
            } else {
                reply.send({ error: err });
            }
        });
    },
    getUser: (req, reply) => {
        User.findById(req.params.id, (err, user) => {
            if (!err) {
                reply.send(user);
            } else {
                reply.send({ error: err });
            }
        });
    },
    createUser: (req, reply) => {
        const user = req.body;
        User.create(user, (err, user) => {
            if (!err) {
                reply.send(user);
            } else {
                reply.send({ error: err });
            }
        });
    },
    updateUser: (req, reply) => {
        User.findById(req.params.id, (err, user) => {
            if (!err) {
                user.name = req.body.name;
                user.password = req.body.password;
                user.save((er, savedUser) => {
                    if (!er) {
                        reply.send(savedUser);
                    } else {
                        reply.send(er);
                    }
                });
            } else {
                reply.send({ error: err });
            }
        });
    },
    deleteUser: (req, reply) => {
        User.findById(req.params.id, (err, user) => {
            if (!err) {
                user.remove((er) => {
                    if (!er) {
                        reply.send('USER DELETED');
                    } else {
                        reply.send(er);
                    }
                });
            } else {
                reply.send({ error: err });
            }
        });
    },
};

module.exports = userController;
