import express, { Application} from 'express';
import cors from 'cors';

const app: Application = express()
// Application route import 
import userRoute from './app/modules/user/user.route';
app.use(cors());
// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// app.get('/api/v1/user', userRoute );
app.use('/api/v1/user', userRoute);

    /*
    Step-1: Interface Create - Done
    Step-2: Schema - Done
    Step-3: Model
    Step-4: Database Query on Model
    */
    // Creating Interface
   
    // Creating Schema 
   
    
    // createUserToDB();



export default app;

/**
 *  // Folder structer gula align korbo
 * Interface
 * model.ts
 * Route
 * Route Function -> controller.ts
 * Database Query Function  -> Service
 */