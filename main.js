/* jshint -W097 */// jshint strict:false
/*jslint node: true */
'use strict';

var utils = require(__dirname + '/lib/utils');

const adapter = utils.Adapter({
    name:          'EigeneDatenpunkte',       // adapter name
});

adapter.on('ready', main);

function main() {
 adapter.log.info("EigeneDatenpunkte has started"); 
}