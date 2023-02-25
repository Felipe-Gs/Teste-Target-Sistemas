const inverterString = (palavra) => {
  let novaString = "";
  for (let i = palavra.length - 1; i >= 0; i--) {
    novaString += palavra[i];
  }
  console.log(novaString);
};

inverterString("felipegomes");
