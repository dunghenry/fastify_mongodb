const User = require('../models/user.model');
const userController = require('../controllers/userController');
function userRoute(fastify, _, done) {
    fastify.get('/:id', userController.getUser);
    fastify.delete('/:id', userController.deleteUser);
    fastify.put('/:id', userController.updateUser);
    fastify.get('/', userController.getUsers);
    fastify.post('/', userController.createUser);
    done();
}
module.exports = userRoute;
