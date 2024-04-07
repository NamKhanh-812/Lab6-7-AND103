const mongoose = require('mongoose');

const local = "mongodb+srv://khanhsnph43678:khanhsnph43678@cluster0.s2dwghm.mongodb.net/Lab5";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
