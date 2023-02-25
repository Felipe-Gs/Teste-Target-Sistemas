let valorInicial = 0;
let valorSecundario = 1;

const fibonacci = (numero) => {
  if (numero <= valorSecundario) {
    console.log(`o numero ${numero} pertence a sequencia!`);
    return;
  }
  while (valorInicial < numero) {
    let proximoNumeroDaSequencia = valorInicial + valorSecundario;

    valorInicial = valorSecundario;
    valorSecundario = proximoNumeroDaSequencia;
  }
  if (valorSecundario === valorInicial) {
    console.log(`o numero ${valorInicial} está contido na sequencia`);
  } else {
    console.log(`o numero ${valorInicial} nao está na sequencia`);
  }
};

fibonacci(1);
