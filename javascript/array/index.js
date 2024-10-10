// Array

let listaDeCompras = ["arroz", "feijão", "carne", "chiclete", "refrigerante", "açaí", "morango", "frango", "ovo", "água"];

let numeros = [1, 2, 3, 4, 5, 6, 7];

let listaComNumeros = ["arroz", 1, "feijao", 2, "carne", 3, "chiclete", 4]

function exibirLista(lista){
    for(let i = 0; i < lista.length; i++){
        console.log("Preciso comprar: " + lista[i]);
    }
}

console.log(exibirLista(listaComNumeros));
