
const dal = require('../../core/dal');
const repositories = require('./repositories')(dal);
const passport = require('./config/passport')(repositories);
const authService = require('./domain/authService')(dal);
const authRoutes = require('./routes')(authService, passport);

module.exports = {
    authRoutes
}