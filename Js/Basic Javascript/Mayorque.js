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