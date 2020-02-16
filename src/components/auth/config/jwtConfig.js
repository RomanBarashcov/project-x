const hashGenerator = require('../../../core/utils/generators').hashGenerator;
const moment = require('moment');
const curentTime = moment().valueOf();
const config = require('../../../boot/config');
const defaultDevSecret = "&34#3dmadsa#da2#Sdqwdk&aJH#sLADdkas#dfl";

module.exports = {
    accessSecret: config.env === "development" ? defaultDevSecret : hashGenerator.generate() + curentTime,
    refreshSecret: config.env === "development" ? defaultDevSecret : hashGenerator.generate() + curentTime,
    registerSecret: config.env === "development" ? defaultDevSecret : hashGenerator.generate() + curentTime,
    longAccessTokenExpiress: 1296000,
    shortAccessTokenExpiress: 86400
};
