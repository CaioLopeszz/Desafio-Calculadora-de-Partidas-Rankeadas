let resultado = calcularRankeada(0, 0)

console.log(resultado)

function calcularRankeada(numVitorias, numDerrotas){
  
    const saldoRankeada = numVitorias - numDerrotas

    let nivelRankeada

    if (numVitorias <= 10){
        nivelRankeada = "Ferro";
    }
    else if (numVitorias >= 11 && numVitorias <= 20){
        nivelRankeada = "Bronze";
    }
    else if (numVitorias >= 21 && numVitorias <= 50){
        nivelRankeada = "Prata";
    }
    else if (numVitorias >= 51 && numVitorias <= 80){
        nivelRankeada = "Ouro";
    }
    else if (numVitorias >= 81 && numVitorias <= 90){
        nivelRankeada = "Diamante";
    }
    else if (numVitorias >= 91 && numVitorias <= 100){
        nivelRankeada = "Lendário";
    }
    else if (numVitorias >= 101){
        nivelRankeada = "Imortal";
    }

    return "O Herói tem um saldo de " + saldoRankeada + " e está no nível de " + nivelRankeada
}


