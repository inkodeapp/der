let containerDER = document.getElementById("containerDER");
let nombredb = document.getElementById("nombredb");
let cantidadTablas = document.getElementById("cantidadTablas");

document.getElementById("btniniciar").addEventListener("click", function () {
  if (nombredb.value.length > 2 & cantidadTablas.value > 1) {
    let containers={}
    for(let i = 0; i < cantidadTablas.value; i++){
      containers
      

    containerDER.innerHTML = "<h2>"+nombredb.value+"</h2>"+cantidadTablas.value;}
  } else {
    alert("Ingrese un nombre de base de datos y una cantidad de tablas");
  }
});
