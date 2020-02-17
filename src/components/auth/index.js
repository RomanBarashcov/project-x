
const dal = require('../../core/dal');
const userRepository = require('./repositories/userRepository')(dal);
const repositories = { userRepository };
const passport = require('./config/passport')(repositories).passport;
const authService = require('./domain/authService/index')(repositories);
const services = { authService };
const authRoutes = require('./routes')(services, passport);

module.exports = authRoutes;