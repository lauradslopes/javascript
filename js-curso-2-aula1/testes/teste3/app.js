
// 1
function imc(altura,peso) {
    return let imc = peso/(altura*altura);
  }

  imc(1.61,82);


// 2
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }



// 3
function calculoDolar(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let real = valorEmDolar*cotacaoDolar;
    return real.toFixed(2);
}
calculoDolar(100);


// 4
function calculoRetangulo(altura,largura) {
    let areaR = altura*largura;
    return areaR;
    let p = 2*(altura+largura);
    return p;
}

calculoRetangulo(5,9);


// 5
function calculoCirculo(r) {
    let c = 2*Math.PI*r;
    return c;
    let areaC = Math.PI*(r*r);
    return areaC;
}

calculoAreaEPerimetro(2);

// 6
function tabuada(n) {
    for (let i = 1; i<=10; i++){
        let resultado = n*i;
    }
}



