const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.log(error);
        console.log('Connected to MongoDB failure!');
        process.exit(1);
    }
};
process.on('SIGINT', async () => {
    console.log('You are performing a server shutdown!');
    await mongoose.connection.close();
    process.exit(0);
});
module.exports = connectDB;
