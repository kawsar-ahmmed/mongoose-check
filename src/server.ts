import mongoose from 'mongoose';
import app from './app';
const port = 5001

// database connection
async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/User');
        console.log('Database connection Successful')
        app.listen(port, () => {
            console.log(`Service is listening on port ${port}`)
        })
    }
    catch {
        console.log('Fail to connect Database')

    }
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

}

bootstrap()
