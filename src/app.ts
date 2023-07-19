import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app: Application = express()
app.use(cors());
// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
    /*
    Step-1: Interface Create - Done
    Step-2: Schema - Done
    Step-3: Model
    Step-4: Database Query on Model
    */
    // Creating Interface
    interface IUser {
        id: string;
        roll: string;
        password: string;
        email?: string;
        name: {
            firstName: string;
            lastName: string;
            middleName?: string;
        };
        dateOfBirth?: string;
        gender: 'male' | 'female';
        contractNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    }
    // Creating Schema 
    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true,
            unique: true
        },
        roll: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        dateOfBirth: {
            type: String,
        },
        gender: {
            type: String,
            enum: ['male', 'female']
        },
        emergencyContactNo: {
            type: String,
            required: true,
        },
        permanentAddress: {
            type: String,
            required: true,
        },
        presentAddress: {
            type: String,
            required: true,
        },
        contractNo: {
            type: String,
            required: true,
        },
        email: {
            type: String,
        },
        name: {
            firstName: {
                type: String,
                required: true,
            },
            lastName: {
                type: String,
                required: true,
            },
            middleName: {
                type: String,
            }
        }
    });
    // Model Creating
    const User = model<IUser>("User", userSchema);
    const createUserToDB = async () => {
        const user = new User({
            id: '767qww6',
            roll: '1221',
            password: 'Kanta',
            email: 'kawsar@gmail.com',
            name: {
                firstName: 'Kawsar',
                lastName: 'Ridoy',
                middleName: 'Ahmed',
            },
            gender: 'male',
            contractNo: '01964288121',
            emergencyContactNo: '01888888288',
            presentAddress: 'Ghana',
            permanentAddress: 'USA'
        });
        await user.save();
        console.log(user)
    };
    createUserToDB();
});


export default app;