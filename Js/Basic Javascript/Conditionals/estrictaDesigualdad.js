function testStrictNotEqual(val) {
    if (val!==17) { // Cambia esta línea
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);