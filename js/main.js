// suponiendo que tienen productos, se le pide al usuario ingresar el valor de su compra. Con una compra superior a $2000 se le realiza
//un descuento del 15% de lo contrario solo se le cobrará el valor de la suma de todos sus productos.

function pedirMasProductos(valor) {
    while (true) {
        let masProductos = prompt("¿Tiene más productos? (si/no)").toLowerCase();
    
        switch (masProductos) {
            case "si":
                valor += Number(prompt("Ingrese el valor del nuevo producto: "));
                break;
            case "no":
                return valor;
            default:
                alert("Por favor, responda con 'si' o 'no'.");
        }
    }
}

let productos = true;

if (productos === true) {
    let valor = Number(prompt("Bienvenido, ingrese el valor de su producto:$ "));

    while (isNaN(valor)){
        valor = Number(prompt("Por favor, ingrese el valor de su producto:$ "));
    }
    let valorFinal = pedirMasProductos(valor);

    if (valorFinal > 2000) {
        let descuento = valorFinal * 0.15;
        let precioConDescuento = valorFinal - descuento;
        alert(`El precio total es de: $${precioConDescuento}, con un descuento del 15%. Gracias por su compra!`);
    } 
    else {
        alert(`El precio total es de $${valorFinal}. Gracias por su compra!`);
    }
}
