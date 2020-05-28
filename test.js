const assert = require('assert');
const nock = require("nock");
const {obterSeason} = require('./service');

describe('Star Wars Tests', function(){
    it('Deve buscar o r2d2 com o formato correto', async ()=> {
        const expected = "Juventus - Inter Milan";
        const result = await obterSeason();
        assert.deepEqual(result,expected);
    })
});