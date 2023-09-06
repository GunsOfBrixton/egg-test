document.addEventListener("DOMContentLoaded", function(){
    let boton = document.getElementById("boton");
    let navbar = document.getElementById("navbar");
    let parrafo = document.getElementById("parrafo");

    boton.addEventListener("click", fan());

    function fan(){
        parrafo.textContent="holaholaaaaa";
    }

});

/* id.style.display = "flex"

homeButton.classList.remove("active"); */