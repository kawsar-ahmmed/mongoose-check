export interface IUser {
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