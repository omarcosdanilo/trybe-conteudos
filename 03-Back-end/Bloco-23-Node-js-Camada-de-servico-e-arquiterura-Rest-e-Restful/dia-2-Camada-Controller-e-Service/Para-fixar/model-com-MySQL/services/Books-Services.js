const isValid = (title, author_id) => {
  if(!title || title.length < 3) return false;
  if(!author_id || author_id < 1 || author_id > 3) return false;

  return true;
}

module.exports = {
  isValid,
}