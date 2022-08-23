module.exports = (error, req, res, next) => {
  if (error.isJoi) {
    return res.status(400).json({ error: { message: error.details[0].message }})
  }
}