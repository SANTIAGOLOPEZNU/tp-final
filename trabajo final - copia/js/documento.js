//creamos el navbar
/*function navbar() {

    alert("funciona")
    var titulo=document.getElementById("1")
    var h3=document.createElement("h3");
    h3.textContent("hfhfh");
    titulo.appendChild(h3); 
}*/

function mostrarnavbar(submenu1) {
    var submenu = document.getElementById(submenu1);
    submenu.style.display = "block";
  }
  
  function ocultarnavbar(submenu1) {
    var submenu = document.getElementById(submenu1);
    submenu.style.display = "none";
  }

  function mostrarnavbar(submenu2) {
    var submenu = document.getElementById(submenu2);
    submenu.style.display = "block";
  }
  
  function ocultarnavbar(submenu2) {
    var submenu = document.getElementById(submenu2);
    submenu.style.display = "none";
  }

  function mostrarnavbar(submenu3) {
    var submenu = document.getElementById(submenu3);
    submenu.style.display = "block";
  }
  
  function ocultarnavbar(submenu3) {
    var submenu = document.getElementById(submenu3);
    submenu.style.display = "none";
  }

  function mostrarnavbar(submenu4) {
    var submenu = document.getElementById(submenu4);
    submenu.style.display = "block";
  }
  
  function ocultarnavbar(submenu4) {
    var submenu = document.getElementById(submenu4);
    submenu.style.display = "none";
  }


  



//creamos el carrusel de cards

//creamos el gutter
//creamos el primer div
var cuerpo = document.getElementById("primer-div");
var div1 = document.createElement("div");
div1.id = "gutteer";
div1.className = "container px-4 text-center";
cuerpo.appendChild(div1);

//creamos el segundo div
var row1 = document.createElement("div");
row1.id = "primerrow";
row1.className = "row gx-5";
gutteer.appendChild(row1)



for (var i = 0; i < 3; i++) {

    //creamos el tercer div
    var row = document.getElementById("primerrow");
    var col1 = document.createElement("div");
    col1.id = "col" + i;
    col1.className = "col-4 mx-auto";
    row.appendChild(col1);

    var centrar = document.getElementById("col" + i);
    var div1 = document.createElement("div");
    div1.id = "primerdiv" + i;
    div1.className = "carousel-item active";
    //div1.textContent = "hola";
    centrar.appendChild(div1);

    //contruyendo un card
    //construimos el primer div
    var cuerpo = document.getElementById("primerdiv" + i);
    var contenedor1 = document.createElement("div");
    //contenedor1.textContent = "hhhh";
    contenedor1.id = "card1" + i;
    contenedor1.className = "card";
    contenedor1.style = "width: 18rem;"
    cuerpo.appendChild(contenedor1);

    //construimos una imagen
    var card1 = document.getElementById("card1" + i);
    var img = document.createElement("img");
    img.src = "/img/zapa" + i + ".jpg";
    img.className = "card-img-top";
    img.alt = "fondo-paisaje"
    card1.appendChild(img);

    //construimos el segundo div
    var div2 = document.getElementById("card1" + i);
    var contenedor2 = document.createElement("div");
    contenedor2.id = "div2" + i;
    contenedor2.className = "card-body";
    div2.appendChild(contenedor2);

    //construimos un h5
    var h5 = document.createElement("h5");
    h5.textContent = "hola";
    h5.className = "card-title";
    div2.appendChild(h5);

    //construimos un parrafo
    var p = document.createElement("p");
    p.textContent = "123";
    p.className = "card-text";
    div2.appendChild(p);

    //construimos un enlace
    var a = document.createElement("a");
    a.textContent = "ver mas";
    a.className = "btn btn-primary";
    div2.appendChild(a);

}
