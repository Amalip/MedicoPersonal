import { datos } from "./datos.models";

export class orden {
    public hasError : boolean;
    public httpStatusCode : number;
    public message : string;
    public data : datos;
}