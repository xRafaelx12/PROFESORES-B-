import Cl_profesor from "./Cl_profesores.js";
export default class Cl_Contrado extends Cl_profesor{
    constructor(nombre,bono,horasTrabajadas){
        super(nombre,bono);
        this.horasTrabajadas = horasTrabajadas;
    }

    methotoCalculatePaidHours(){
        return this.horasTrabajadas*10
    }
}