const { SSL_OP_TLS_D5_BUG } = require('constants');
const fs = require('fs');
const fsp = fs.promises;
const dto = require('../dtos')
const {ValidJsonFileName, median, mean} = require('../utils')

const path = "./json_resources/";

//Gets an activity by filename
getByFilename = async (req, res) => {
  fileName = req.params.fileName;

  try { // Busca o arquivo no disco
    ValidJsonFileName(fileName);
    data = await fsp.readFile(path + fileName);
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
    data = await fsp.readFile(path + fileName);
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
  try{
    fileNames = await fsp.readdir(path);
  } catch(err){ // Internal Server Error
    console.log(err)
    return res.status(500).json({'error_message': err.message, 'err': err});
  }
  
  activitiesStatus = [];

  for (let i = 0; i < fileNames.length; i++) {
    try { // Busca o arquivo no disco
      data = await fsp.readFile(path + fileNames[i]);
    } catch (err) {
      console.error('Something went wrong!', err);
      return res.status(400).json({'error_message': err.message, 'err': err});
    }
    data = JSON.parse(data).exits.map(item => item.activity);

    activitiesStatus.push({
      [fileNames[i]] : new dto.MeanExit(mean(data), median(data))
    });
  }

  return res.status(200).json(activitiesStatus);
}

module.exports = {getByFilename, getMeanByFilename, getAllMean};