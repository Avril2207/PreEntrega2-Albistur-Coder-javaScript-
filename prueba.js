function pedirMasProductos (){
    let masProductos = prompt("tiene más productos? (si/no)").toLowerCase;

    while (masProductos === "si"){
       let precioFinal = valor += masProductos;
        return precioFinal;
    }
    while (masProductos === "no"){
        return valor;
    }
}

let productos = true;

if (productos === true){
    let valor = Number(prompt("ingrese el valor de su producto: "));
    pedirMasProductos (valor);

    if (precioFinal > 2000){
        let descuento = precioFinal - precioFinal * 0.15;
        alert (`el precio final es de: ${descuento} con un 15% de descuento`);
    }
    else {
        alert(`el precio final es de: ${precioFinal}`);
    }
}

separaci[on]

function pedirMasProductos(valor) {
    let masProductos = prompt("¿Tiene más productos? (si/no)").toLowerCase();

    switch (masProductos) {
        case "si":
            valor += Number(prompt("Ingrese el valor del nuevo producto: "));
            return pedirMasProductos(valor);
        case "no":
            (masProductos === "no") 
            return valor;
    }
}

let productos = true;

if (productos === true) {
    let valor = Number(prompt("Ingrese el valor de su producto: "));
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