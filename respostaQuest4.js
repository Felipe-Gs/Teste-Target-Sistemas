const valores = [
  {
    estado: "SP",
    valor: 67836.43,
  },
  {
    estado: "RJ",
    valor: 36678.66,
  },
  {
    estado: "MG",
    valor: 29229.88,
  },
  {
    estado: "ES",
    valor: 27165.48,
  },
  {
    estado: "Outros",
    valor: 19849.53,
  },
];

const calcularPercentual = () => {
  let total = 0;
  valores.map((item) => {
    total += item.valor;
  });
  valores.map((item) => {
    console.log(item.estado, ((item.valor / total) * 100).toFixed(2), "%");
  });
};

calcularPercentual();
