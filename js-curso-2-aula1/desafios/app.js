let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarChute() {
    console.log('O botão foi clicado.');
}

function amo() {
    alert('Eu amo JS');
}

function cidade() {
    let cid = prompt('Diga o nome de uma cidade no Brasil:');
    alert(`Estive em ${cid} e lembrei de você`);
}

function soma() {
    let valor1 = prompt('digite um numero inteiro:');
    let valor2 = prompt('Digite o segundo número:');
    let soma = valor1+valor2;
    alert(`soma dos valores igual a ${soma}`);
}