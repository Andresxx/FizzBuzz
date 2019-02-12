
var assert = require('assert'); //para incluir mensajes ej: *assert.typeOf(foo, 'string')*
var expect = require('chai').expect; // es bueno para buleanos y numeros
var should = require('chai').should; //cuidado con conpatibilidad / expect y sould son parecidos


var fixzzbuzz = require('../fizzbuzz');

describe('Pruebas para multiplo de 3', function(){

    it('Deberia retornar verdadero dado 6', function(){
        expect(multipleOfThree(6)).equal(true);
    });

    it('Deberia retornar falso dado 5', function(){
        expect(multipleOfThree(5)).equal(false);
    });
    
})


describe('Pruebas para multiplo de 5', function(){

    it('Deberia retornar verdadero dado 10 ', function(){
        expect(multipleOfFive(10)).equal(true);
    });

    it('Deberia retornar falso dado 11 ', function(){
        expect(multipleOfFive(11)).equal(false);
    });
})