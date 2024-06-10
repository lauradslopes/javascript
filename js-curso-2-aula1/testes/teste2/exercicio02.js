
// 1
function exibirOla() {
    console.log('Olá, mundo!');
}

exibirOla();

// 2
function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
  }
  
  exibirOlaNome("Alice");

  // 3
  function calcularDobro(numero) {
    return numero * 2;
  }
  
  let resultadoDobro = calcularDobro(5);
  console.log(resultadoDobro);

  // 4
  function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let media = calcularMedia(4, 7, 10);
  console.log(media);

  // 5
  function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumero = encontrarMaior(15, 9);
  console.log(maiorNumero);


  // 6
  function quadrado(numero) {
    return numero * numero;
  }
  
  let resultado = quadrado(2);
  console.log(resultado); 
