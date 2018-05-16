const axios = require("axios");
const xpath = require("xpath');
const dom = require('xmldom').DOMParser;
const marc4js = require('marc4js');
const S = require('string');

const serviceUrl = 'https://worldcat.org/bib/data/';

const BibError = require('../src/BibError');

module.exports = class Bib {
	constructor(record) {
		this.record = record;
	}
	
