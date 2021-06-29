// Regex que checa se é um filename válido
const isJsonFilename = /^[^\.][\w-\.]+\.json/i;

ValidJsonFileName = (fileName) => {
  if(!(isJsonFilename.test(fileName))){
    throw new Error("Invalid FileName supplied");
  }
}

median = (values) => {
  if(values.length === 0) return 0;

  values.sort((a,b) => a-b);

  var half = Math.floor(values.length / 2);

  if (values.length % 2)
    return values[half];

  return (values[half - 1] + values[half]) / 2.0;
}
mean = (values) => {
  var total = values.reduce((acc, x) => acc += x);
  return total / values.length;
}


module.exports = {ValidJsonFileName, median, mean};