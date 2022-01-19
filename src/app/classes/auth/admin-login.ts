import { iLogin } from "src/app/interfaces/auth/login";

export class AdminLogin implements iLogin{
    username: string = 'admin';
    password: string = '111111';
}
