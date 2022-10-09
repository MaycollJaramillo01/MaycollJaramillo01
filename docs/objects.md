# Objects

* Es posible que hayas escuchado el término objeto (object) antes.

* Los objetos son similares a los arreglos (arrays), excepto que en lugar de usar índices para acceder y modificar sus datos, accedes a los datos en objetos a través de propiedades (properties).

* Los objetos son útiles para almacenar datos de forma estructurada y pueden representar objetos del mundo real, como un gato.

 * Por ejemplo, aquí hay un objeto de gato:


const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

# Accede a propiedades de objetos con notación de puntos

* Accede a propiedades de objetos con notación de puntos
Hay dos maneras de acceder a las propiedades de un objeto: notación de puntos (.) y notación de corchetes ([]), similar a un arreglo.

* La notación de puntos es lo que se usa cuando conoces el nombre de la propiedad a la que intentas acceder con antelación.


# Accede a propiedades de objetos con variables

* Otro uso de la notación de corchetes en objetos es acceder a una propiedad que está almacenada como el valor de una variable. Esto puede ser muy útil para iterar a través de las propiedades de un objeto o para acceder a una tabla de búsqueda.

* Aquí hay un ejemplo del uso de una variable para acceder a una propiedad:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);