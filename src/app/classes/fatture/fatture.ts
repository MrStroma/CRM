import { Stato } from "src/app/interfaces/fatture/ifatture";
import { IUser } from "src/app/interfaces/user/i-user";


export class Fatture {
    id!: number;
    data!: string;
    numero!: number;
    anno!: number;
    importo!: number;
    stato!:Stato
    cliente!:IUser
  }