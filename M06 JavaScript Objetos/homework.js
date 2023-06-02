/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
  var objeto = {};
  objeto.nombre = nombre;
  objeto.edad = edad;
  objeto.meow = function () {
    return "Meow!";
  };
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retornar el objeto.
  // Tu código:
  var objeto = {};
  objeto.nombre = nombre;
  objeto.email = email;
  objeto.password = password;
  return objeto;
}

function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:
  var miObjeto = objeto;
  miObjeto[propiedad] = null;
  return miObjeto;
}

function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // [NOTA]: no necesitar retornar nada.
  // Tu código:
  var miObjeto = objeto;
  var existe = miObjeto.hasOwnProperty(metodo);
  if (existe) {
    miObjeto[metodo]();
  }
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  miObjeto = objetoMisterioso;
  var resultado = miObjeto.numeroMisterioso;
  resultado = resultado * 5;
  return resultado;
}

function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  miObjeto = objeto;
  delete miObjeto[propiedad];
  return miObjeto;
}

function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:
  miObjeto = objetoUsuario;
  if (miObjeto.hasOwnProperty("email") && miObjeto.email != null) {
    return true;
  } else {
    return false;
  }
}

function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:
  var miObjeto = objeto;
  return miObjeto.hasOwnProperty(propiedad);
}

function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:
  var miObjeto = objetoUsuario;
  if (miObjeto.password == password) {
    return true;
  } else {
    return false;
  }
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario.password= nuevaPassword;
  return objetoUsuario;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  var amigo= objetoUsuario.amigos;
  amigo.push(nuevoAmigo);
  objetoUsuario.amigos= amigo;
  return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:

  objetoMuchosUsuarios.map(
  (usuario)=>{ usuario.esPremium=true;});
  return objetoMuchosUsuarios;
  
}

function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  var posteos= objetoUsuario.posts;
  var suma=0;
  posteos.map(
    (post) => {
      suma =suma +  post.likes;
    }
  );
  return suma;
  
}

function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
    objetoProducto.calcularPrecioDescuento = function() {
    var precioDescuento = this.precio * this.porcentajeDeDescuento;
    var precioFinal = this.precio - precioDescuento;
    return precioFinal;
  };
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  crearGato,
  nuevoUsuario,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
};
