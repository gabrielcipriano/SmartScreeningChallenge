// Regex que checa se é um filename válido
const isJsonFilename = /^[^\.][\w-\.]+\.json/i;

ValidJsonFileName = (fileName) => {
  if(!(isJsonFilename.test(fileName))){
    throw new Error("Invalid FileName supplied");
  }
}

module.exports = ValidJsonFileName;