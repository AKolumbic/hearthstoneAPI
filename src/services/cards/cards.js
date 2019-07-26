const errors = require('@feathersjs/errors')

const fetchCards = () => {
  return(app) => {
    app.use('/v1/cards', {
      async get(params) {
        try {
          console.log('Params', params)
        } catch (err) {
          console.log('Cards Endpoint - General Error')
          return Promise.reject(
            new errors.GeneralError('Configure Accounts General Error', err.message)
          )
        }
      }
    })
  }
}

module.exports = fetchCards