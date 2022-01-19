import { IUser, IComune, IProvincia, ISede } from "src/app/interfaces/user/i-user";

export class User implements IUser {

        id!: number;
        ragioneSociale!: string;
        partitaIva!: string;
        tipoCliente!: string;
        email!: string;
        pec!: string;
        telefono!: string;
        nomeContatto!: string;
        cognomeContatto!: string;
        telefonoContatto!: string;
        emailContatto!: string;
        indirizzoSedeOperativa: Sede = new Sede;
        indirizzoSedeLegale: Sede = new Sede;
        dataInserimento!: string;
        dataUltimoContatto!: string;
        fatturatoAnnuale!: number;

    }
    export class Sede implements ISede{
            id!:number;
            via!: string;
            civico!: string;
            cap!:string;
            localita!: string;
            comune!:Comune 
            provincia!:Provincia
        }
            export class Comune implements IComune{
                id!: number;
                nome!: string;
                provincia!: IProvincia;
            }
                export class Provincia implements IProvincia{
                    id!: number;
                    nome!: string;
                    sigla!: string;

            }