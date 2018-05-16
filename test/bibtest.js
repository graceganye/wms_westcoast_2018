const expect = require('chai').expect;
const moxios = require('moxios');
const fs = require('fs');
const xpath = require('xpath');
const dom = require('xmldom').DOMParser;
const marc4js = require('marc4js');

const Bib = require('../src/Bib');
const bib_response = fs.readFileSync(require('path').resolve(_dirname, './mocks/bibResponse.xml')).toString());

describe('Create Bib test', () => {
	var bib;
	before(() => {
		let doc = new dom().parsefromString(bib_response);
		select = xpath.useNamespaces({"atom": "http://www.w3.org/2005/Atom", "rb": "http://worldcat.org/rb"});
		let record = select('//atom:content/rb:response', doc)
		marc4js.parse(record, {fromFormat: 'marcxml'}, function(err, records){
			bib = new Bib(records[0]);
		});
	});

	it('Creates an bib object', () => {
		expect(bib).to.be.an.instanceof(Bib);
	});
});

