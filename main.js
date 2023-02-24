window.addEventListener("load", init)

function init() {
    const tartalomElem = document.getElementById("tartalom")
    console.log(tartalomElem);
    const tartalomElem3 = document.getElementsByClassName("tart")
    const tartalomElemEz = document.querySelectorAll(".tart")
    console.log(tartalomElemEz);

    let lista = ["Lasagne", "Rántott csirkemell", "Kijevi csirkemell", "Arrabiata penne"]
    let kepek = ["arra.jpg", "kij.jpg", "Las.jpg", "rant.jpg"]
    listaKiir(lista, tartalomElemEz);
    kepKiir(kepek);

}
function listaKiir(lista, tartalomElemEz) {
    let szoveg = "<h1>Kedvenc ételeim: </h1>";
    szoveg += "<ul>"
    for (let index = 0; index < lista.length; index++) {

        szoveg += "<li>" + lista[index] + "</li>"

    }
    szoveg += "</ul>"
    tartalomElemEz[0].innerHTML = szoveg

}
function kepKiir(lista) {
    const tartalomElemEz = document.querySelectorAll(".article")
    szoveg ="";
    for (let index = 0; index < lista.length; index++) {
        szoveg+='<div><img src="'+lista[index]+'" alt="asd">';
        szoveg+="</div>";
        
    }
    tartalomElemEz[0].innerHTML = szoveg;
    
    
}