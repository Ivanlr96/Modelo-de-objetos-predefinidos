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

// funcion para mostrar todo lo necesario
const mostrar = () => {
    document.open()
    document.write(`Buenos días <strong> ${nombre} </strong> <br/>`)
    document.write(`La longitud del nombre completo es de <strong>${nombreCompleto.length} </strong> caracteres, incluyendo los espacios <br/>`)
    document.write(`La <strong> primera letra 'A' </strong> del nombre está en la posición <strong> ${nombreCompleto.indexOf('a', 0) + 1} </strong> <br/>`)
    document.write(`La <strong> última letra 'A' </strong> del nombre está en la posición <strong> ${nombreCompleto.lastIndexOf('a', nombreCompleto.length) + 1} </strong> <br/>`)
    document.write(`Tu nombre menos <strong> las tres primeras letras </strong> de tu nombre es <strong> ${nombreCompleto.slice(3,nombreCompleto.length)} </strong><br/>`)
    document.write(`Tu nombre todo en <strong> MAYÚSCULAS </strong> es <strong> ${nombreCompleto.toUpperCase()} </strong> <br/>`)
    document.write(`Tu <strong> edad </strong> es de ${edad()} años <br/>`)
    document.write(`Naciste un feliz día de <strong>${estacion()} </strong> del año ${anio}</br>`)
    document.write(`El <strong> coseno de 180 </strong> es ${Math.cos(180 * (Math.PI / 180))}<br/>`)
    document.write(`El numero mayor de <strong>(34, 67, 75, 35, 19) </strong> es ${Math.max(34, 67, 23, 75, 35, 19)} <br/>`)
    document.write(`Ejemplo de número al azar entre 0 y 100:<strong> ${(Math.random() * 100).toFixed(0)} </ strong><br/>`)
    //Botón para abrir la ventana
    const btn1 = document.createElement('button')
    btn1.innerText = 'Abrir ventana'
    document.body.appendChild(btn1)
    btn1.addEventListener('click', () => {
       ventana ()
    })
    const btn2 = document.createElement('button')
    // Boton para reiniciar la página y que se vuelvan a pedir los datos
    btn2.innerText = 'Reiniciar'
    document.body.appendChild(btn2)
    btn2.addEventListener('click', () => {
        saludar();
        mostrar();
    })
    document.close();
}
function ventana () {
    const ventana=window.open('./templates/ventana.html', 'nuevaVentana', "toolbar=0,location=1,directories=0,resizable=0,width=800,height=800");
    ventana.onload = () =>{
        const windowURL = ventana.location.href
        const windowProtocol = ventana.location.protocol
    ventana.document.write(`
    <h1>Ejemplo de ventana nueva</h1>
    <p><strong>URL Completa: </strong>${windowURL}</p>
    <p><strong>Protocolo utilizado: </strong>${windowProtocol}</p>
    <iframe width="800" height="600" src="https://www.rtve.es/noticias/"></iframe>
    `)
    // Boton para cerrar la ventana
        const btnC=ventana.document.createElement('button')
        btnC.innerText="Cerrar Ventana"
        ventana.document.body.appendChild(btnC)
        btnC.addEventListener('click', ()=> {
            ventana.close()
        })
}
}
