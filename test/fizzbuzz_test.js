
var assert = require('assert'); //para incluir mensajes ej: *assert.typeOf(foo, 'string')*
var expect = require('chai').expect; // es bueno para buleanos y numeros
var should = require('chai').should; //cuidado con conpatibilidad / expect y sould son parecidos


var fixzzbuzz = require('../fizzbuzz.js');

describe('Pruebas para fizzbuzz', function(){
    it('Deberia retornar que 6 es multiplo de 3', function(){
        expect(fixzzbuzz.multipleOfthree(6)).equal(true);
    })
})