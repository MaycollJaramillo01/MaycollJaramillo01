function sequentialSizes(val) {
    let answer = "";
    // Cambia solo el código debajo de esta línea
  
  switch(val){
  case 1:
  case 2:
  case 3:
      return "Low";
      break;
  case 4:
  case 5:
  case 6:
      return "Mid";
      break;
  case 7:
  case 8:
  case 9:
      return "High";
      break;
    }
    // Cambia solo el código encima de esta línea
    return answer;
  }
  
  sequentialSizes(1);


  /* Otro Ejemplo*/
  function chainToSwitch(val) {
    let answer = "";
    // Cambia solo el código debajo de esta línea
  switch(val){
    case "bob" :
      return "Marley";
      break;
    case 42:
      return "The Answer";
      break;
    case 1:
      return "There is no #1";
      break;
   case 99:
      return "Missed me by this much!";
      break;
   case 7:
     return "Ate Nine";
     break;
    
  }
    // Cambia solo el código encima de esta línea
    return answer;
  }
  
  chainToSwitch(7);