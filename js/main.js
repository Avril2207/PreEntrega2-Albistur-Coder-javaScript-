// suponiendo que tienen productos, se le pide al usuario ingresar el valor de su compra. Con una compra superior a $2000 se le realiza
//un descuento del 15% de lo contrario solo se le cobrará el valor de la suma de todos sus productos.

//PRE ENTREGA 1

// function pedirMasProductos(valor) {
//     while (true) {
//         let masProductos = prompt("¿Tiene más productos? (si/no)").toLowerCase();
    
//         switch (masProductos) {
//             case "si":
//                 valor += Number(prompt("Ingrese el valor del nuevo producto: "));
//                 break;
//             case "no":
//                 return valor;
//             default:
//                 alert("Por favor, responda con 'si' o 'no'.");
//         }
//     }
// }

// let productos = true;

// if (productos === true) {
//     let valor = Number(prompt("Bienvenido, ingrese el valor de su producto:$ "));

//     while (isNaN(valor)){ 
//         valor = Number(prompt("Por favor, ingrese el valor de su producto:$ "));
//     }
//     let valorFinal = pedirMasProductos(valor);

//     if (valorFinal > 2000) {
//         let descuento = valorFinal * 0.15;
//         let precioConDescuento = valorFinal - descuento;
//         alert(`El precio total es de: $${precioConDescuento}, con un descuento del 15%. Gracias por su compra!`);
//     } 
//     else {
//         alert(`El precio total es de $${valorFinal}. Gracias por su compra!`);
//     }
// }


//PRE-ENTREGA 2 


 // Array de productos
let productos = [
    { id: 1, name:"Torta láminas de chocolate bicolor", precio: 105},
    { id: 2, name:"Tarta de frutos rojos", precio: 100},
    { id: 3, name:"Tarta de frutos rojos con crumble", precio: 90},
    { id: 4, name:"Brownie de chocolate", precio: 55},
    { id: 5, name:"Tarta red velvet con crema de queso", precio: 170},
    { id: 6, name:"Pasta frola", precio: 70}
  ];
  
  // FUNCIÓN PARA ENCONTRAR EL ID
  function buscarProducto(id) {
    return productos.find(producto => producto.id === id);
  };

  //FUNCIÓN PARA PEDIR MÁS PRODUCTOS Y CALCULAR EL TOTAL

  function pedirMasProductos() {
    while (true) {
      let masProductos = prompt("¿Tiene más productos? (si/no)").toLowerCase();
  
      switch (masProductos) {
        case "si":
          let nuevoId = Number(prompt("Ingrese el ID del nuevo producto:"));
          let nuevoProducto = buscarProducto(nuevoId);
  
          if (nuevoProducto) {
            productosEnLista.push(nuevoProducto);
            alert(`Producto agregado: ${nuevoProducto.name} - Precio: $${nuevoProducto.precio}`);
          } else {
            alert("ID de producto no encontrado. Intente nuevamente.");
          }
          break;
        case "no":
          return productosEnLista.reduce((total, producto) => total + producto.precio, 0);
        default:
          alert("Por favor, responda con 'si' o 'no'.");
      }
    }
  }


  //COMIENZO 

let productosEnLista = []; //ARRAY DONDE SE VAN A IR ACUMULANDO LOS PRODUCTOS QUE EL USUARIO SELECCIONE 

  if (true){
    productos.forEach((producto)=>{
      alert(`Bienvenido, los productos disponibles son:
      id: ${producto.id},
      nombre: ${producto.name},
      precio: $${producto.precio}`)
    }); //MUESTRA DE LOS PRODUCTOS DISPONIBLES

    let idIngresado = Number(prompt(`Ingrese el id de su producto: `));
   

    while(isNaN(idIngresado)){
      alert ("Id no encontrado, vuelva a intentar.");
      idIngresado = Number(prompt(`Ingrese el id de su producto: `));
    }
    let idEncontrado = buscarProducto(idIngresado);
    
    if (idEncontrado){ //EN CASO DE ENCONTRARSE EL ID, EL PRODUCTO SE AGREGA A UN ARRAY VACIO
      productosEnLista.push(idEncontrado);
      alert(`Producto agregado: ${idEncontrado.name} - Precio: $${idEncontrado.precio}`);
      let valorFinal = pedirMasProductos();

      if(valorFinal > 1000){ //EN CASO DE QUE LA SUMA TOTAL DEL PRECIO DE LOS PRODUCTOS SUPERE LOS $1000, AL USUARIO SE LE REALIZA UN DESCUENTO DEL 15%
        let descuento = valorFinal * 0.15;
        let precioConDescuento = valorFinal - descuento;
        alert(`El precio total es de: $${precioConDescuento}, con un descuento del 15%. Gracias por su compra!`);
      }else{
        alert(`El precio total es de $${valorFinal}. Gracias por su compra!`);
      }
    }
    else{
      alert ("Id no encontrado, fin del programa"); //EN CASO DE QUE NO SE ENCUENTRE EL ID SE TERMINA EL PROGRAMA
    }
  }

