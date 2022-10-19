const showDate = document.querySelector('.container h1');
const dateToday = new Date();


function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}
const hour =  zeroEsquerda(dateToday.getHours());
const minute = zeroEsquerda(dateToday.getMinutes());
const seg = zeroEsquerda(dateToday.getSeconds());


function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira'
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado'
            return diaSemanaTexto;
        default:
            diaSemanaTexto = ''
            return diaSemanaTexto;
    }
}
function getMesTexto(numMes) {
    let nomeMes;
    switch (numMes) {
        case 0:
            nomeMes = 'janeiro'
            return  nomeMes;
        case 1:
            nomeMes = 'fevereiro'
            return  nomeMes;
        case 2:
            nomeMes = 'março'
            return  nomeMes;
        case 3:
            nomeMes = 'abril'
            return  nomeMes;
        case 4:
            nomeMes = 'maio'
            return  nomeMes;
        case 5:
            nomeMes = 'junho'
            return  nomeMes;
        case 6:
            nomeMes = 'julho'
            return  nomeMes;
        case 7:
            nomeMes = 'agosto'
            return  nomeMes;
        case 8:
            nomeMes = 'setembro'
            return  nomeMes;
        case 9:
            nomeMes = 'outubro'
            return  nomeMes;
        case 10:
            nomeMes = 'novembro'
            return nomeMes;
        case 11:
            nomeMes = 'dezembro'
            return  nomeMes;
    }
}
function criarData(dateToday){
    const diaSemana = dateToday.getDay();
    const numMes = dateToday.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getMesTexto(numMes);

   return `${nomeDia}, ${diaSemana} de ${nomeMes} às ${hour}: ${minute}: ${seg} `;
}
showDate.innerHTML = criarData(dateToday);
