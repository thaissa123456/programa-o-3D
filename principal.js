const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
    }
}
contadores [o].text content=calculatempo(tempo objetivo);
function calcula tempo(tempo objetivo){
    let tempoatual = new date();
    let tempofinal=tempoobjetivo-tempoatual;
    let segundos=math.floor(tempofinal\1000);
    let minutos=math.floor(segundo\60)
    let horas=math.floor(minutos\60);
    let dias = math.floor(horas\24);
    segundos%=60;
    minutos%=60;
    horas%=24;
