import Cl_Contrado from "./Cl_contratados.js";
import Cl_Fijo from "./Cl_fijos.js";
import Cl_profesor from "./Cl_profesores.js";

let profesor1= new Cl_Contrado("Rafael",30,15)
let profesor2= new Cl_Contrado("Felicia",30,20)

let salida = document.getElementById("salida");

salida.innerHTML = ` 
<br>nombre del profesor: ${profesor1.nombre},
<br>Monto Del bono: ${profesor1.bono},
<br>Horas trabajadas del personal: ${profesor1.horasTrabajadas},
<br>ingresos total del profesor: ${profesor1.methotoCalculatePaidHours()},
<br>nombre del profesor: ${profesor2.nombre},
<br>Monto Del bono: ${profesor2.bono},
<br>Monto del sueldo: ${profesor2.horasTrabajadas},
<br>ingresos total del profesor: ${profesor2.methotoCalculatePaidHours()}`