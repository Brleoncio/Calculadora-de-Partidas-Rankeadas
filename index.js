function saldoDeVitoria(victoryBalance){
    let vitoria = {
        Ferro: victoryBalance < 10,
        Bronze: victoryBalance >= 11 && victoryBalance <= 20,
        Ouro: victoryBalance >= 21 && victoryBalance <= 50,
        Prata: victoryBalance >= 51 && victoryBalance <= 80,
        Diamante: victoryBalance >= 81 && victoryBalance <= 90,
        Lendário: victoryBalance >= 91 && victoryBalance <= 100,
        Imortal: victoryBalance >= 101,       
    };
    for (let nivel in vitoria){
        if (vitoria[nivel]) {
            return nivel;
        }
    }

    return "Nível não especificado";
}

const saldoVitoria = 85;
let nivel = saldoDeVitoria(saldoVitoria)

console.log(" O Herói tem de saldo de " + saldoVitoria + " vitórias e está no nivel de " + nivel + ".")