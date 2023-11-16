// Declaramos las variables que necesitamos 
let nombre;
let apellido1;
let apellido2;
let nombreCompleto;

// Funcion para pedir los datos a los usuarios y quitarles los espacios
const saludar = () => {
    nombre = prompt("Introduzca su nombre").trim()
    // Bucle para que se vuelva a pedir el dato si no se introduce nada o si lo que introduce no son letras
    while (nombre==="" || !isNaN(nombre)) {
        nombre = prompt("Introduzca su nombre").trim()
    }
    apellido1 = prompt("Introduzca el primer apellido").trim()
    while (apellido1===""){
        apellido1 = prompt("Introduzca el primer apellido").trim()
    }
    apellido2 = prompt("Introduzca el segundo apellido").trim()
    while (apellido2==="") {
        apellido2 = prompt("Introduzca el segundo apellido").trim()
    }
    dia = prompt("Introduzca el día de su nacimiento").trim()
    // En este caso el bucle se repetirá si no se introducen números
    while (dia==="" || isNaN(dia)) {
        dia = prompt("Introduzca el día de su nacimiento").trim()
    }
    mes = prompt("Introduzca el mes de su nacimiento").trim()
    while (mes==="" || isNaN(mes)) {
        mes = prompt("Introduzca el mes de su nacimiento").trim()
    }
    anio = prompt("Introduzca el año de su nacimiento").trim()
    while (anio==="" || isNaN(anio)) {
        anio = prompt("Introduzca el año de su nacimiento").trim()
    }
    // esta variable concatena los 3 con espacios entre ellos
    nombreCompleto = nombre + " " + apellido1 + " " + apellido2;

}

// funcion para calcular la edad
function edad() {
    // variable que recoge la fecha actual para hacer el cálculo
    let actual = new Date();
    diaA = parseInt(actual.getDate())
    mesA = parseInt(actual.getMonth()) + 1
    anioA = parseInt(actual.getFullYear())

    let edad = anioA - anio
    // condiciones para tener en cuenta la fecha exacta del cumpleaños en el momento de determinar la edad 
    if (mesA < mes) {
        edad = edad - 1
    } else if (mesA === mes) {
        if (diaA < dia) {
            edad=edad-1;
        }
    }
    return edad
}
function estacion() {
    // convertimos a numero entero el valor introducido para el mes //
    let mesN = parseInt(mes);
    let mesL = mesN.toString()
    // Si introducimos el día sin cero inicial para valores inferiores a 10 se le añade cero al inicio
    if (dia < 10) dia = "0" + dia
    let diaL = dia.toString();
    // Juntamos (no estamos sumando) el mes y el año concatenando
    let mesdia = mesL.concat(diaL)
    let estac = parseInt(mesdia)
    if (estac > 0) {
        // desde eñ 21 de marzo (321), 3 es del mes y 21 es del dia hasta el 20 de junio (620) es primavera
        if (estac >= 321 && estac <= 620) {
            return "primavera"
            // desde el 21 de junio (621) hasta el 20 de septiembre (920) es Verano
        } else if (estac >= 621 && estac <= 920) {
            return "Verano"

        } // desde el 21 de septiembre (921) hasta el 20 de diciembre (1220)
        else if (estac >= 921 && estac <= 1220) {
            return "Otoño"
        }
        else {
            return "Invierno"
        }
        // la que queda es el invierno

    } else {
        return null
    }
}