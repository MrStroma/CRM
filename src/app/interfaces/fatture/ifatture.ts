import { IUser } from "../user/i-user";

export interface IFatture {
  id: number;
  data: string;
  numero: number;
  anno: number;
  importo: number;
  stato: Stato;
  cliente: IUser;
}

export interface Stato {
  id: number;
  nome: string;
}