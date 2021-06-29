const fs = require('fs').promises;
const dto = require('../dtos')
const {ValidJsonFileName, median, mean} = require('../utils')

const path = "./json_resources/";

//Gets an activity by filename
getByFilename = async (req, res) => {
  fileName = req.params.fileName;

  try { // Busca o arquivo no disco
    ValidJsonFileName(fileName);
    data = await fs.readFile(path + fileName);
  } catch (err) {
    console.error('Something went wrong!', err);
    return res.status(400).json({'error_message': err.message, 'err': err});
  }

  // mapeando para filtrar o arquivo JSON de saída
  exitList = JSON.parse(data).exits.map(item => new dto.ExitListItem(item));

  return res.status(200).json(exitList);
}

getMeanByFilename = async (req, res) => {
  fileName = req.params.fileName;

  try { // Busca o arquivo no disco
    ValidJsonFileName(fileName);
    data = await fs.readFile(path + fileName);
  } catch (err) {
    console.error('Something went wrong!', err);
    return res.status(400).json({'error_message': err.message, 'err': err});
  }
  
  // mapeando para obter somente os valores de activity
  activities = JSON.parse(data).exits.map(item => item.activity);

  // Objeto de saída
  meanExit = new dto.MeanExit(mean(activities), median(activities));

  return res.status(200).json(meanExit);
}

getAllMean = async (req, res) => {
  //TODO: implementar
}

module.exports = {getByFilename, getMeanByFilename, getAllMean};