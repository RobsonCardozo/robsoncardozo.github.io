// Função para exibir valores na tela da calculadora
function dis(val) {
  document.getElementById("calc").value += val;
}

// Função para limpar a tela da calculadora
function clr() {
  document.getElementById("calc").value = "";
}

// Função para avaliar a expressão matemática
function solve() {
  let x = document.getElementById("calc").value;
  let y = eval(x);
  document.getElementById("calc").value = y;
}

// Função para inverter o sinal do valor atual
function sign() {
  let x = document.getElementById("calc").value;
  document.getElementById("calc").value = -x;
}

// Função para calcular a raiz quadrada do valor atual
function sqrt() {
  let x = document.getElementById("calc").value;
  document.getElementById("calc").value = Math.sqrt(x);
}

// Função para calcular o quadrado do valor atual
function square() {
  let x = document.getElementById("calc").value;
  document.getElementById("calc").value = Math.pow(x, 2);
}

// Função para calcular o cubo do valor atual
function cube() {
  let x = document.getElementById("calc").value;
  document.getElementById("calc").value = Math.pow(x, 3);
}
