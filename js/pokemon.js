let ataqueJugador

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-pokemon")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("clcik", ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("clcik", ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("clcik", ataqueTierra)

    let botonReiniciar = document.getElementById("reiniciar")
    botonReiniciar.addEventListener("click", botonReiniciar)


}

function seleccionarMascotaJugador(){

    let seleccionarMascota = document.getElementById("boton-pokemon")
    seleccionarMascota.style.display="none"

    let seccionSeleccionAtaque = document.getElementById("seleccionar-ataque")
    seccionSeleccionarAtaque.style.display="flex"

    let imputCharmander = document.getElementById("charmander")

    let imputBoulbasour = document.getElementById("boulbasour")

    let imputSquirtle = document.getElementById("squirtle")

    if (imputCharmander.checked){

        spanMascotaEnemigo.innerhtml="charmander"


    } else if(imputBoulbasour.checked){

        spanMascotaEnemigo.innerhtml="boulbasour"

    } else if(imputSquirtle.checked){

        spanMascotaEnemigo.innerhtml="squirtle"

    } else{

        Alert("Seleccionar una mascota")
        
    }


}

function ataqueFuego(){

    ataqueJugador = "fuego"
    
}

function ataqueAgua(){

    ataqueJugador = "agua"
}

function ataqueTierra(){

    ataqueJugador = "tierra"
}