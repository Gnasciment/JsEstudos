
function diferencaEntreDatas(data1, data2) {

    let diferencaEmMilissegundos = Math.abs(data2 - data1);

    let segundos = Math.floor(diferencaEmMilissegundos / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return {
        dias: dias,
        horas: horas,
        minutos: minutos,
        segundos: segundos
    };
}

setInterval(
    function exibirDiferenca() {
        let data1 = new Date();
        let data2 = new Date('2024-05-31T00:00:00');
        let diferenca = diferencaEntreDatas(data1, data2);
        let resultadoDiv = document.getElementById('resultado');

        resultadoDiv.innerHTML = `
        ${diferenca.dias} Dias
        ${diferenca.horas} Hora(s)
        ${diferenca.minutos} Minutos
        ${diferenca.segundos} Segundos
    `;
    }, 1000);
