function testGreaterOrEqual(val) {
    if (val>=20) {  // Cambia esta línea
      return "20 or Over";
    }
  
    if (val>=10) {  // Cambia esta línea
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);



  /* */


  function testLessOrEqual(val) {
    if (val<=12) {  // Cambia esta línea
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  // Cambia esta línea
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);


  function testLogicalAnd(val) {
    // Cambia solo el código debajo de esta línea
  
    if (val >= 25 && val <= 50) {
    
        return "Yes";
    
    }
  
    // Cambia solo el código encima de esta línea
    return "No";
  }
  
  testLogicalAnd(10);