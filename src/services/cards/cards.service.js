// // Initializes the `Cards` service on path `/cards`
// const createService = require('feathers-mongodb')
// const hooks = require('./cards.hooks')

// module.exports = function (app) {
//   const paginate = app.get('paginate')
//   const mongoClient = app.get('mongoClient')
//   const options = {
//     paginate
//   }

//   // Initialize our service with any options it requires
//   app.use('/cards', createService(options))

//   // Get our initialized service so that we can register hooks and filters
//   const service = app.service('cards')

//   mongoClient.then(db => {
//     service.Model = db.collection('cards')
//   })

//   service.hooks(hooks)
// }
