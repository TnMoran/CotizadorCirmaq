let numeroDePedido = 12300;
let numeroCliente;
const GERDAU = 1;
const CELULOSA = 2;
const TENARIS = 3;
const TOYOTA = 4;

let nombreCliente;
let tituloDePedido;
let fechaIngreso = new Date;
let fechaVencimiento = new Date(fechaIngreso.getTime() + 604800000);
let valorTotalCotizado = 0;
let valorItemCotizado;
let continuar;
let continuarItem;

function agregarItemCotizado(totalCotizado, precio, cantidad) {
    return totalCotizado + precio * cantidad;
}

//alert("la fecha de hoy es: " + fechaIngreso);
//alert("la fecha de vencimiento es: " + fechaVencimiento);

while (continuar !== "2") {
    console.log("Bienvenido");
    numeroCliente = parseInt(prompt("Ingrese el cliente:\n 1-Gerdau\n 2-Celulosa\n 3-Tenaris\n 4-Toyota"));
    continuarItem = 0;
    valorTotalCotizado = 0;
    switch (numeroCliente) {
        case GERDAU:
            nombreCliente = "GERDAU";
            console.log(nombreCliente);
            break;
        case CELULOSA:
            nombreCliente = "CELULOSA";
            console.log(nombreCliente);
            break;
        case TENARIS:
            nombreCliente = "TENARIS";
            console.log(nombreCliente);
            break;
        case TOYOTA:
            nombreCliente = "TOYOTA";
            console.log(nombreCliente);
            break;

        default:
            nombreCliente = "CLIENTE SIN INGRESAR";

    }
    tituloDePedido = prompt("Asigne un titulo al pedido del cliente: ...");
    numeroDePedido = numeroDePedido + 1;

    while (continuarItem !== "2") {
        valorTotalCotizado = agregarItemCotizado(valorTotalCotizado, parseFloat(prompt("Ingrese el valor del item")), parseFloat(prompt("Ingrese cantidad")));

        continuarItem = prompt("1-Continuar agregando items \n 2-No quiero agregar más items");
    }

    alert("su numero de pedido " + numeroDePedido + " del cliente " + nombreCliente +
        " con nombre " + tituloDePedido + " ,se cargó correctamente. Con fecha de inicio " + fechaIngreso +
        " y el pedido vencerá el día " + fechaVencimiento + " . Teniendo un valor total de " + valorTotalCotizado);

    continuar = prompt("1-Crear nueva solicitud \n 2-Buscar solicitud existente");
}