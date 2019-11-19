/* jshint -W097 */// jshint strict:false
/*jslint node: true */
'use strict';

const xml2js     = require('xml2js');
const http       = require('http');
const utils = require('@iobroker/adapter-core'); // Get common adapter utils
const dictionary = require(__dirname + '/lib/words');

const adapter = utils.Adapter({
    name:          'EigeneDatenpunkte',       // adapter name
    useFormatDate:  true       // read date format from config
});

adapter.on('ready', main);

function main() {
   
}