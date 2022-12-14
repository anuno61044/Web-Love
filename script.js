let targets = document.getElementsByClassName("target")
for (let index = 0; index < targets.length; index++) {
    targets[index].addEventListener("click", (e,index) => {
        const current = e.currentTarget
        document.getElementById("contenedor2").innerHTML = current.innerHTML
        document.getElementById("texto2").innerHTML = current.getElementsByClassName("description")[0].innerHTML
    })
    
}
let carta_galeria = "<p>La Habana, Cuba, 13 de diciembre de 2022</p><p>Mi niña: </p><p>Holaaa, tardaste mucho? jjj, bueno, SORPRESAAAAAAA, en esta pagina encontrarás fotos de algunos momentos que hemos pasado juntos en este tiempo con una pequeña descripción personal. Espero que te guste, me tomó más tiempo de lo que pensaba, pero si sonríes valió la pena.<br>Con Cariño.</p><p class = \"w-100 text-end\">Platonic</p>"

let carta2 = document.getElementById("carta2")
carta2.addEventListener("click", e => {
    document.getElementById("contenedor2").innerHTML = carta_galeria
    document.getElementById("texto2").innerHTML = " "
})
