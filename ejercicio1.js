/* 
La categoria define el sueldo basico mensual (1: u$s 1000, 2: u$s 1500, 3: u$s 2000)
La subcategoria define el multiplicador (A: x1.5, B: x2, C: x2.5)
Ambos datos son ingresados por el usuario

Informar dentro de que rango esta el sueldo:

Rango inicial: entre u$s 1500 inclusive y u$s 3000 inclusive
Rango intermedio: entre u$s 3000 exclusive y u$s 4000 inclusive
Rango avanzado: si supera los u$s 4000 */ 


var categoria = parseInt(prompt("ingrese el numero de la categoria a la que pertenece (1, 2 o 3)"));
var subcategoria = prompt("ingrese la subcategoria a la que pertenece (A, B o C)");
var sueldoBasico;
var sueldo;

if( categoria == 1 || categoria == 2 || categoria == 3) {
    ( subcategoria == "a" || subcategoria == "b" || subcategoria == "c")}

    switch (categoria) {
        case 1:
            sueldo = 1000;
            break;
            case 2:
                sueldo = 1500;
                break;
                case 3:
                    sueldo = 2000;
                    break;
    }

    switch (subcategoria) {
        case "a":
            sueldo *= 1.5;
            break;
            case "b":
                sueldo *= 2;
                break;
                case "c":
                    sueldo *= 2.5;
                    break;
                    default: alert("algo hizo mal");
    }

    if(sueldo){
        if(sueldo >= 1500 && sueldo <= 3000){
            alert("su sueldo es "+ sueldo + " y pertenece al rango incial");
        } 

        if(sueldo > 3000 && sueldo <= 4000){
            alert("su sueldo es "+ sueldo + " y pertenece al rango intermedio");
        } 

        if(sueldo > 4000){
            alert("su sueldo es "+ sueldo + " y pertenece al rango avanzado");
        } 


    }
