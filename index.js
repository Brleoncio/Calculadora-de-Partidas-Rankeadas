let vitoria;
let rank;

function calculoDoRank(saldoDeVitorias){
    vitoria = saldoDeVitorias;
    if (saldoDeVitorias < 10) {
        rank = "Ferro";
    } else if (saldoDeVitorias >= 11 && saldoDeVitorias <= 20) {
        rank = "Bronze";
    } else if (saldoDeVitorias >= 21 && saldoDeVitorias <= 50) {
        rank = "Prata";
    } else if (saldoDeVitorias >= 51 && saldoDeVitorias <= 80) {
        rank = "Ouro";
    } else if (saldoDeVitorias >= 81 && saldoDeVitorias <= 90) {
        rank = "Diamante";
    } else if (saldoDeVitorias >= 91 && saldoDeVitorias <= 100) {
        rank = "Lendário";
    } else if (saldoDeVitorias >= 101) {
        rank = "Imortal";
    }
}

function comparadorDePartidas(vitoria){
    calculoDoRank(vitoria)    
 }
 comparadorDePartidas(78)

console.log(" O Herói tem de saldo de " + vitoria + " vitórias e está no nivel de " + rank + ".")