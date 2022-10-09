function testGreaterThan(val) {
    if (val) {  // Cambia esta línea
      return "Over 100";
    }
  
    if (val  >= "3") {  // Cambia esta línea
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(7);

  
