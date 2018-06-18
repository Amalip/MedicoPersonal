export class Paciente {
    public idPaciente : number;
    public numeroSeguro : number;
    public status : number;
    public pin : string;

    constructor(
        public _idPaciente : number, 
        public _nombre: string){
    }
}