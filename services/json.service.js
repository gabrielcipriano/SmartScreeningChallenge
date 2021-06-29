const fs = require('fs').promises;
const {ValidJsonFileName} = require('../utils')

const path = "./json_resources/";

module.exports = {
  getByFilename: async (req, res) => {
    fileName = req.params.fileName

    try {
      ValidJsonFileName(fileName);
      data = await fs.readFile(path + fileName);
    } catch (err) {
      console.error('Something went wrong!', err);
      return res.status(404).json({'error_message': err.message, 'err': err});
    }

    return res.status(200).json(JSON.parse(data));
  }
}