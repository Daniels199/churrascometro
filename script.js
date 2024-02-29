
// carne - 400g por pessoa + 6h - 650g
// cerveja - 1200L por pessoa + 6h - 2000ml
// refrigerante/agua - 1000ml por pessoa + 6h - 1500ml

// crianças valem por - 0.5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...");

    let adultos = parseFloat(inputAdultos.value);
    let criancas = parseFloat(inputCriancas.value);
    let duracao = parseFloat(inputDuracao.value);

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>` +
                          `<p>${Math.ceil(qtdTotalCerveja / 2000)} Latas de Cerveja</p>` +
                          `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de 2L de Bebida</p>`;
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
