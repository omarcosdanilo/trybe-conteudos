function calculaSituacao(media) {
  if (media > 7 || media === 7) {
    return 'aprovacao';
  }

  return 'reprovacao';
}

module.exports = calculaSituacao;