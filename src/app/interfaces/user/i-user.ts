export interface IUser         {
    id?: number,
    ragioneSociale: string,
    partitaIva: string,
    tipoCliente: string,
    email: string,
    pec: string,
    telefono: string,
    nomeContatto: string,
    cognomeContatto: string,
    telefonoContatto: string,
    emailContatto: string,
    indirizzoSedeOperativa: ISede,
    indirizzoSedeLegale: ISede,
    dataInserimento: string,
    dataUltimoContatto: string,
    fatturatoAnnuale: number
}

export interface ISede {
        id:number,
        via: string,
        civico: string,
        cap:string,
        localita: string,
        comune:IComune
        provincia: IProvincia
    }
        export interface IComune {
            id: number,
            nome: string,
            provincia:IProvincia
        }
            export interface IProvincia {
                id: number,
                nome: string,
                sigla: string

        }