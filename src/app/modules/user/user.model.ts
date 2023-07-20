import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

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
export default User;