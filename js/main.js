

let clave ="12345";
let usuario =prompt("Ingresa tu usuario:");

for (let i=2; i>=0; i-- ){
  let ingreso = prompt("ingresa tu clave")
  if(clave == ingreso){
    alert("Bienvenido/a a tu tienda favorita de ropa")
    break;
  }else{
    alert("Error al intentar iniciar sesion, intente de nuevo");
  }
}



  let articulos = prompt(
    "Selecciona que tipo de articulo quiere comprar \n 1-Remeras \n 2-Pantalones \n 3-Calzados"
  );

  switch (articulos) {
    case "1":
     alert("Seleccionaste remeras");

     break;
   case "2":
    alert("Seleccionaste pantalones");
     break;
    case "3":
      alert("Seleccionaste calzados");
      break;
     default:
     alert("No es un articulo valido");
     break;
 }





