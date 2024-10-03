function calculadorNotas(nomeAluno, nota1, nota2){
    let media = (nota1 + nota2) / 2;
    let situacao;

    if(media >= 7){
        situacao = "Aprovado";
    }else if(media < 7){
        situacao = "Reprovado";
    }

    return "O aluno " + nomeAluno + " está " + situacao + " tirou a média: " + media;
}

console.log(calculadorNotas("João Victor Póvoa França", 7, 10));
console.log(calculadorNotas("Camille", 10, 10));
console.log(calculadorNotas("Kauan", 9, 8));
console.log(calculadorNotas("Rafael", 5, 4.7));
