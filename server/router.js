const user = require('./api/user')

module.exports = (app) => {
    app.use('/api/user', user)
}