const boton = document.getElementById("btnCotizar");
const botonMail = document.getElementById("btnMail");

boton.addEventListener("click", function(){

const nombre = document.getElementById("nombre").value.trim();
const telefono = document.getElementById("telefono").value.trim();
const origen = document.getElementById("origen").value.trim();
const destino = document.getElementById("destino").value.trim();

    const fecha = document.getElementById("fecha").value;

    const muebles = document.getElementById("muebles").value;

    const piso = document.getElementById("piso").value;

    const ascensor = document.getElementById("ascensor").value;

    const detalle = document.getElementById("detalle").value;

    if(nombre === "" || telefono === "" || origen === "" || destino === ""){

    alert("Por favor completa los campos obligatorios.");

    return;

}

const mensaje = `Hola, soy ${nombre}.

Quisiera solicitar una cotización.

Teléfono: ${telefono}
Origen: ${origen}
Destino: ${destino}
Fecha: ${fecha}
Cantidad de muebles: ${muebles}
Piso: ${piso}
Ascensor: ${ascensor}

Información adicional:
${detalle}`;

const mensajeCodificado = encodeURIComponent(mensaje);

window.open(

`https://wa.me/56993693035?text=${mensajeCodificado}`,

"_blank"

);

})


botonMail.addEventListener("click", function(){

const nombre = document.getElementById("nombre").value.trim();
const telefono = document.getElementById("telefono").value.trim();
const origen = document.getElementById("origen").value.trim();
const destino = document.getElementById("destino").value.trim();

const fecha = document.getElementById("fecha").value;
const muebles = document.getElementById("muebles").value;
const piso = document.getElementById("piso").value;
const ascensor = document.getElementById("ascensor").value;
const detalle = document.getElementById("detalle").value;

if(nombre === "" || telefono === "" || origen === "" || destino === ""){

    alert("Por favor completa los campos obligatorios.");
    return;s

}

const mensaje = `Hola, soy ${nombre}.

Quisiera solicitar una cotización.

Teléfono: ${telefono}
Origen: ${origen}
Destino: ${destino}
Fecha: ${fecha}
Cantidad de muebles: ${muebles}
Piso: ${piso}
Ascensor: ${ascensor}

Información adicional:
${detalle}`;

const mensajeCodificado = encodeURIComponent(mensaje);

window.location.href =
`mailto:jbustamante2529@gmail.com?subject=Solicitud de cotización&body=${mensajeCodificado}`;

});


const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function(){

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){
        menuToggle.innerHTML = "✕";
    }else{
        menuToggle.innerHTML = "☰";
    }

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link){

    link.addEventListener("click", function(){

        navMenu.classList.remove("active");

        menuToggle.innerHTML = "☰";

    });

});

});