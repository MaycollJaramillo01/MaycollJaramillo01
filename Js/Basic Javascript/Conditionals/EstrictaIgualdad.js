function testStrict(val) {
    if (val===7) { // Cambia esta línea
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);


  // Configuración
function compareEquality(a, b) {
    if (a === b) { // Cambia esta línea
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");