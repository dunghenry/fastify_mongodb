const fastify = require('fastify')({ logger: true });
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./configs/connect.db');
connectDB();
fastify.register(require('./routes/user.route'), { prefix: '/api/users' });
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
