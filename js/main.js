
function ingresarNombreApellido() {
  var nombre = prompt("Por favor, ingresa tu nombre:");
  var apellido = prompt("Ahora, ingresa tu apellido:");
  
  
  var nombreCompleto = nombre + " " + apellido;
  
  
  return nombreCompleto;
}


var nombreCompleto = ingresarNombreApellido();
console.log("Nombre completo ingresado:", nombreCompleto);

let clave = "12345";
let usuario = prompt("Ingresa tu usuario:");
let inicioSesionExitoso = false;

for (let i = 2; i >= 0; i--) {
  let ingreso = prompt("Ingresa tu clave");
  if (clave === ingreso) {
    alert("¡Bienvenido/a a tu tienda favorita de ropa!");
    inicioSesionExitoso = true;
    break;
  } else {
    alert("Error al intentar iniciar sesión, inténtalo de nuevo.");
  }
}

if (inicioSesionExitoso) {

  let articulos = prompt(
    "Selecciona que tipo de articulo quiere comprar \n 1-Remeras \n 2-Pantalones \n 3-Calzados \n 4-Salir"
  );

  switch (articulos) {
    case "1":
     alert("Seleccionaste remeras");
     prompt("Selecciona que tipo de remera quieres comprar \n 1-Manga corta \n 2-Manga larga");
     alert("Muchas gracias por comprar en nuestra tienda.")
     break;
   case "2":
    alert("Seleccionaste pantalones");
    prompt("Selecciona que tipo de pantalon quieres comprar \n 1-Vaqueros \n 2-Shorts \n 3-jogging");
    alert("Muchas gracias por comprar en nuestra tienda.")
     break;
    case "3":
      alert("Seleccionaste calzados");
      prompt("Seleccione que tipo de calzado quiere coimprar \n 1-Zapatos \n 2-Zapatillas \n 3-Ojotas");
      alert("Muchas gracias por comprar en nuestra tienda.")
      break;
      case "4":
        alert("Hasta la proxima.")
        break;
     default:
     alert("No es un articulo valido");
     break;
 }

}



