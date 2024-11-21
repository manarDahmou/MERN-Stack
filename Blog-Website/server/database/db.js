import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `mongodb://localhost:27017/Blog`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database:', error);
    }
};

Connection(); // Appelez la fonction


export default Connection;