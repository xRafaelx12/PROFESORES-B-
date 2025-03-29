
import Cl_profesor from "./Cl_profesores.js";

export default class Cl_Fijo extends Cl_profesor{
    constructor(nombre,bono,sueldo){
        super(nombre,bono);
        this.sueldo = sueldo;
    }

    calcularSueldo(){
        return this.sueldo+this.bono
    }
}