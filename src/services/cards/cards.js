const errors = require('@feathersjs/errors')

let token = null
const credentials = {
  client: {
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET
  },
  auth: {
    tokenHost: 'https://us.battle.net'
  }
}

const oauth2 = require('simple-oauth2').create(credentials)

const getToken = () => {
  if (token === null || token.expired()) {
    return oauth2.clientCredentials
      .getToken()
      .then(oauth2.accessToken.create)
      .then(t => {
        token = t
        return t.token.access_token
      })
  } else {
    return Promise.resolve(token.token.access_token)
  }
}

const fetchCards = () => {
  return(app) => {
    app.use('/v1/cards', {
      async get(params) {
        console.log('CARDS ENDPOINT REACHED')
        try {
          console.log('Params', params)
          const accessToken = await getToken()
          console.log('Access Token: ', accessToken)
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