const express = require('express');
const app = express();

app.all('*', (req, res) => {
  return res.status(404).json({
    message: `Rota ${req.path} não existe`
  })
});

// nunca vai chegar nessa rota!
app.get('/xablau', function (req, res) {
	return res.status(200).json({ message: `Xablau!`});
});

app.listen(3003, () => console.log('Rodando na 3003'))