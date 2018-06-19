import { datos } from "./datos.models";

export class Orden {
    public hasError : boolean;
    public httpStatusCode : number;
    public message : string;
    public data : datos;
}