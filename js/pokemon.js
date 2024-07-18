let ataqueJugador
let ataqueEnemigo

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

    let seccionSeleccionarMascota = document.getElementById("boton-pokemon")
    seccionSeleccionarMascota.style.display="none"

    let seccionSeleccionAtaque = document.getElementById("seleccionar-ataque")
    seccionSeleccionarAtaque.style.display="flex"

    let imputCharmander = document.getElementById("charmander")

    let imputBoulbasour = document.getElementById("boulbasour")

    let imputSquirtle = document.getElementById("squirtle")

    let spanMascota = document.getElementById("mascota-jugador")

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

function seleccionarMascotaEnemigo(){
    
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(ataqueAleatorio == 1){

        spanMascotaEnemigo.innerhtml = "charmander"

    } else if(ataqueAleatorio == 2){

        spanMascotaEnemigo.innerhtml = "boulbasour"

    } else{

        spanMascotaEnemigo.innerhtml = "squirtle"
    }
}

function ataqueFuego(){

    ataqueJugador = "fuego"
    ataqueAleatorioEnemigo()
    
}

function ataqueAgua(){

    ataqueJugador = "agua"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){

    ataqueJugador = "tierra"
    ataqueAleatorioEnemigo()
}


function ataqueAleatorioEnemigo(){

    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1){

        ataqueEnemigo = "fuego"

    }else if (ataqueAleatorio == 2){

        ataqueEnemigo = "agua"
    } else{

        ataqueEnemigo = "tierra"
    }
}

function Aleatorio(min,max){

    return Math.floor(math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)