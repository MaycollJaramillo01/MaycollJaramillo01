function trueOrFalse(wasThatTrue) {
    // Cambia solo el código debajo de esta línea
  
  if(wasThatTrue){
    return "Yes, that was true";
  }
  return "No, that was false";
  
    // Cambia solo el código encima de esta línea
  
  }

  function testElse(val) {
    let result = "";
    // Cambia solo el código debajo de esta línea
  
    if (val > 5) {
      result = "Bigger than 5";
    }else{
      result = "5 or Smaller";
    }
  
    // Cambia solo el código encima de esta línea
    return result;
  }
  
  testElse(4);


  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
   else if (val < 5) {
      return "Smaller than 5";
    }
  else{
    return "Between 5 and 10";
  }
  }
  
  testElseIf(7);



  /*Orden Logico */

  function bar(x) {
    if (x < 2) {
      return "Less than two";
    } else if (x < 1) {
      return "Less than one";
    } else {
      return "Greater than or equal to two";
    }
  }


  /* */
  function testSize(num) {
    // Cambia solo el código debajo de esta línea
  if(num <5){
    return "Tiny";
  }
  
  else if(num <10){
    return "Small";
  }
  else if(num <15){
    return "Medium";
  }
  else if(num < 20){
    return "Large";
  }
  if(num>=20){
    return "Huge";
  }
  
  
  else 
    return "Change Me";
    // Cambia solo el código encima de esta línea
  }
  
  testSize(7);