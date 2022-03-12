let containerDER = document.getElementById("containerDER")!;
let container = window.document.querySelector(".container")!;
let btnBorrar = window.document.querySelector("#btnBorrar")!;
let nombredb = document.getElementById("nombredb");
let cantidadTablas = document.getElementById("cantidadTablas");
let iniciar = window.document.getElementById("btniniciar");
let btnGuardar = window.document.querySelector("#btnGuardar")!;


if (localStorage.getItem("diagrama")) {
  let diagrama = JSON.parse(localStorage.getItem("diagrama")|| "");
  console.log(diagrama);








/*
  container.setAttribute("style", "display:none");
  btnBorrar.setAttribute("style", "display:flex");
  btnGuardar.setAttribute("style", "display:flex");*/
}

btnBorrar?.addEventListener("click", () => {
  containerDER.innerHTML = "";
  container.setAttribute("style", "display:flex");
  localStorage.removeItem("diagrama");
});

btnGuardar?.addEventListener("click", () => {
  let diagramatotal: Array<String> = [];

  console.clear();
  for (let i = 0; i < 20; i++) {
    let elemento = document.getElementById(`tabla${i}`);
    if (elemento && (elemento as HTMLInputElement).value != "") {
      diagramatotal.push(`tabla${i}:` + (elemento as HTMLInputElement).value);

      for (let i = 0; i < 100; i++) {
        let columna = document.getElementById(`columna${i}`);
        if (columna && (columna as HTMLInputElement).value != "") {
          diagramatotal.push(
            `columna${i}:` + (columna as HTMLInputElement).value
          );
        }
      }
    }
    let accion = document.getElementById(`accion${i}`);
    if (accion && (accion as HTMLInputElement).value != "") {
      diagramatotal.push(`accion${i}:` + (accion as HTMLInputElement).value);
    }
  }

  //console.log(diagramatotal);
  localStorage.setItem("diagrama", JSON.stringify(diagramatotal));
});

if (iniciar != null) {
  iniciar.addEventListener("click", function () {
    let nombreDataBase: string = (nombredb as HTMLInputElement).value;
    let cantidadDeTablas: number = Number(
      (cantidadTablas as HTMLInputElement).value
    );
    if (nombreDataBase.length > 2 && cantidadDeTablas > 1) {
      let divs: string = "<h2>" + nombreDataBase + "</h2>";
      divs = divs + '<div class="derContainer">';
      for (let i = 0; i < cantidadDeTablas; i++) {
        if (i == 0) {
          divs =
            divs +
            `<div class="contenedorTablas">
            <input id="tabla${i + 1}" placeholder="Tabla ${
              i + 1
            }" class="entidades"  id="columna1">
          <div class="agrupador">
    <hr class="separadorVertical"> 
    <div class="contenedorObjetos" id="contenedorObjetos${
      i + 1
    }"></div> </div><div class="buttonagregar" id="agregarColumna${
              i + 1
            }">+</div>
    </div>`;
        } else {
          divs =
            divs +
            `<hr class="separadorHorizontal">
            <div class="contenedorAcciones">
            <input placeholder="Accion ${i}" class="acciones" id="accion${i}">
            </div><hr class="separadorHorizontal">
            <div class="contenedorTablas">
            <input id="tabla${i + 1}" placeholder="Tabla ${
              i + 1
            }" class="entidades" >
              <div class="agrupador">
              <hr class="separadorVertical"> <div class="contenedorObjetos" id="contenedorObjetos${
                i + 1
              }"></div></div><div class="buttonagregar" id="agregarColumna${
              i + 1
            }">+</div>
    </div>`;
        }
      }
      divs = divs + "</div>";
      containerDER.innerHTML = divs;
    } else {
      alert("Ingrese un nombre de base de datos y una cantidad de tablas");
    }

    window.document
      .querySelectorAll(".buttonagregar")
      .forEach(function (element) {
        element.addEventListener("click", function (e) {
          let id = (e.target as HTMLElement).getAttribute("id");
          if (id) {
            let contenedorObjetos = document.getElementById(
              `contenedorObjetos${id.substring(id.length - 1, id.length)}`
            )!;
            let numero: number = parseInt(id.replace("agregarColumna", ""));

            let columna = document.createElement("input");
            columna.classList.add("objeto");
            columna.setAttribute(
              "id",
              `columna${numero}` + `${contenedorObjetos.childNodes.length + 1}`
            );
            columna.setAttribute(
              "placeholder",
              `Columna ${contenedorObjetos.childNodes.length + 1}`
            );
            contenedorObjetos.appendChild(columna);
          }
        });
      });
  });
}
