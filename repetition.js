let phrase = document.querySelector("h2").innerHTML;
let resultados = document.getElementById("result");
let quadro = document.getElementById("quadroNegro");
let boardLines = 11;


function lineNumber() {
    //pegar as vezes que o usuário deseja que repita a frase
    let phraseRepetition = +document.querySelector('input[name="numeroRepeticao"]').value;

    //limpar os resultados anteriores
    resultados.innerHTML = "";
    quadro.innerHTML = "";

    //comprovação 
    console.log(phrase);
    console.log(phraseRepetition);

    //vezes apagados o quadro
    let erased = phraseRepetition/boardLines;
    console.log(erased);
    let integer = Math.trunc(erased);
    console.log(integer);
    let lastParagraphs = phraseRepetition - (integer*boardLines);
    console.log(lastParagraphs);

    //quando for múltiplo de 11 então no quadro devem aparecer 11 linhas e uma vez menos apagado
    if (lastParagraphs === 0) {
        lastParagraphs = 11;
        integer = integer - 1;
    }

    n= 1;

    // escrever no quadro a frase
    while (n <= lastParagraphs) {
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = phrase;
        quadro.appendChild(paragrafo);
        n++;
    }
    let erasedNumber = document.createElement('p');
    erasedNumber.innerHTML = "Vezes apagadas: " + integer;
    resultados.appendChild(erasedNumber);
    
}
