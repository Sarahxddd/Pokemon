let ataqueJugador
let ataqueEnemigo
let vidasEnemigo = 3
let vidasJugador= 3

function iniciarJuego(){

    let seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    seccionSeleccionarAtaque.style.display = "none"

    let seccionReiniciar = document.getElementById("reiniciar")
    seccionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-pokemon")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
   
    
    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)


}

function seleccionarMascotaJugador(){

    let seccionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    seccionSeleccionarMascota.style.display="none"

    let seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    seccionSeleccionarAtaque.style.display="flex"

    let inputCharmander = document.getElementById("charmander")

    let inputBoulbasour = document.getElementById("boulbasour")

    let inputSquirtle = document.getElementById("squirtle")

    let spanMascota = document.getElementById("mascota-jugador")

    if (inputCharmander.checked){

        spanMascota.innerHTML="charmander"


    } else if(inputBoulbasour.checked){

        spanMascota.innerHTML="boulbasour"

    } else if(inputSquirtle.checked){

        spanMascota.innerHTML="squirtle"

    } else{

        alert("Seleccionar una mascota")
        
    }

    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo(){
    
    let mascotaAleatoriaEnemigo = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(mascotaAleatoriaEnemigo == 1){

        spanMascotaEnemigo.innerHTML = "charmander"

    } else if(mascotaAleatoriaEnemigo == 2){

        spanMascotaEnemigo.innerHTML = "boulbasour"

    } else{

        spanMascotaEnemigo.innerHTML = "squirtle"
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

    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador){

        crearMensaje("Empate")
    } else if (ataqueJugador == "fuego" && ataqueEnemigo == "tierra"){

        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    }else if(ataqueJugador == "agua" && ataqueEnemigo == "fuego"){

        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    }else if(ataqueJugador == "tierra" && ataqueEnemigo == "agua"){

        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else{

        crearMensaje("Perdiste")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
 
    }

    revisarVidas()
}

function revisarVidas(){

    if(vidasEnemigo==0){
        crearMensajeFinal("Felicidades, ganaste.")
    } else if(vidasJugador==0){
        crearMensajeFinal("Lo siento, perdiste :(")
    }
}


function crearMensaje(resultado){

    let seccionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ". La mascota del enemigo atacó con " + ataqueEnemigo + ". - " + resultado
    seccionMensajes.appendChild(parrafo)

}

function crearMensajeFinal(resultadoFinal){

    let seccionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    seccionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true


    let seccionReiniciar = document.getElementById("reiniciar")
    seccionReiniciar.style.display = "block"
}

function reiniciarJuego(){

    location.reload()

}
function Aleatorio(min,max){

    return Math.floor(math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)

