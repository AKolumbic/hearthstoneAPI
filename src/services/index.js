const cards = require('./cards/cards.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(cards)
}
