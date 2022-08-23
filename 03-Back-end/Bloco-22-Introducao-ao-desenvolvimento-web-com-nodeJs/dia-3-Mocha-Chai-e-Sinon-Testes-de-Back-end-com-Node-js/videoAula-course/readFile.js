const fs = require('fs');

const readFile = (fileName) => {
  try {
    const content = fs.readFile(fileName, 'utf8')
    return content.toString();
    
  } catch (error) {
    return null;
  }

}

module.exports = readFile;