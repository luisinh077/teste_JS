const mainArray = [15, 33, 2, 47, 9, 13, 72, 27, 83];

ordenar();
somaArray();
verifyExist(13);
verifyMaior(70);
posPares();

// Função para ordenar os números do array em ordem crescente
function ordenar() {
  var auxArray = [];
  auxArray.push(mainArray);
  auxArray.sort((a, b) => a - b);
  console.log(`\nDados do array em ordem crescente: ${auxArray}`);
}

// Função para somar todos os números dentro do array
function somaArray() {
  let soma = 0;

  mainArray.forEach(array => {
    soma += array;
  });

  console.log(`\nSoma de todos os valores dentro do array: ${soma}`);
}

// função verifica se o número que o usuário digitou está no array
function verifyExist(valor) {
  let achei = false;

  mainArray.forEach(array => {
    if (valor == array) {
      achei = true;
      console.log("\nSim, esse número está no array!");
    }
  });
  if (achei == false) {
    console.log("\nNão existe esse número no array!");
  }
}

// Função recebe um número como parâmetro e imprimi todos valores do array
// que são maiores que ele.
function verifyMaior(valor) {
  var auxArray = [];

  mainArray.forEach(array => {
    if (array > valor) {
      auxArray.push(array);
    }
  });

  console.log(`\nNúmeros maiores que ${valor} são: ${auxArray}`);
}

// Função para imprimir os valores nas posições pares
function posPares() {
  var auxArray = [];

  for (i = 0; i < mainArray.length; i++) {
    if (i % 2 == 0) {
      auxArray.push(mainArray[i]);
    }
  }

  console.log(`\nValores do array nas posições pares: ${auxArray}`);
}