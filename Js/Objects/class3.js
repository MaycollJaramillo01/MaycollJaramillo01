function phoneticLookup(val) {
    let result = "";
  
    // Cambia solo el código debajo de esta línea
  var lookup = {
  'alpha': "Adams",
  'bravo': "Boston",
  'charlie': "Chicago",
  'delta': "Denver",
  'echo': "Easy",
  'foxtrot': "Frank"
  };
  return lookup[val];
    // Cambia solo el código encima de esta línea
    return result;
  }
  
  phoneticLookup("charlie");