import { iLogin } from "src/app/interfaces/auth/login";

export class Login implements iLogin {

    username!: string;
    password!: string;
    constructor(username: string, password: string){
        username = username;
        password = password;
    }
}
