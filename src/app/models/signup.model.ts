import { Role } from "./role.model";

export class Signup {
    firstName!: String;
    lastName!: String;
    email!: String;
    phone!: number;
    password!: String;
    userType!: String;
    userAgreement!: boolean;
    role!: Role[];
}
