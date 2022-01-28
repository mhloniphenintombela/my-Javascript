let person = [
    { name: 'hardy', age: 18,},
    { name: 'vusumuzi', age: 37},
    { name: 'wandile', age: 40,},
    { name: 'charity', age: 20,},
    { name: 'precious', age: 16,},
    { name: 'andisiwe', age: 28,},
    { name: 'mmapaseka', age: 35,},
    { name: 'mhlonipheni', age: 15,},
    { name: 'khumbulani', age: 19,},
    { name: 'sophie', age: 25,},
    { name: 'lucky', age: 40,},
    { name: 'sithembiso', age: 36,},
    { name: 'happy', age: 27,},
    { name: 'selina', age: 24,},
    { name: 'nkosiphendule', age: 30,},
    { name: 'kagisho', age: 19,},
  ];

  for(let i= 0; i< person.length; i++ ) {
    document.getElementById("demo").innerHTML += "<ul>" + person[i].name + '  ' + person[i].age + "</ul>";

  }
  
  
  
