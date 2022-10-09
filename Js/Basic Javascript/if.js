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