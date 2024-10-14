var assert = require('assert');
const Calculadora = require('../src/calculadora');

describe('Testes calculadora', function () {
    let calc;

    beforeEach(function () {
        calc = new Calculadora();
    });

    describe('somar', function () {
        it('deve retornar 5 quando somar 2 e 3', function () {
            assert.equal(calc.somar(2, 3), 5);
        });
    });

    describe('subtrair', function () {
        it('deve retornar 1 quando subtrair 3 de 4', function () {
            assert.equal(calc.subtrair(4, 3), 1);
        });
    });

    describe('multiplicar', function () {
        it('deve retornar 6 quando multiplicar 2 e 3', function () {
            assert.equal(calc.multiplicar(2, 3), 6);
        });
    });

    describe('dividir', function () {
        it('deve retornar 2 quando dividir 6 por 3', function () {
            assert.equal(calc.dividir(6, 3), 2);
        });

        it('deve lançar um erro quando dividir por zero', function () {
            assert.throws(() => calc.dividir(6, 0), /Divisão por zero não é permitida\./);
        });
    });


    // Testes para o método fatorial
    describe('fatorial', function () {
        it('deve retornar 120 para fatorial de 5', function () {
            assert.strictEqual(calc.fatorial(5), 120);
        });

        it('deve retornar 1 para fatorial de 0', function () {
            assert.strictEqual(calc.fatorial(0), 1);
        });

        it('deve lançar um erro para números negativos', function () {
            assert.throws(() => calc.fatorial(-1), /Fatorial não é definido para números negativos\./);
        });
    });

    // Testes para o método potencia
    describe('potencia', function () {
        it('deve retornar 8 para base 2 e expoente 3', function () {
            assert.strictEqual(calc.potencia(2, 3), 8);
        });

        it('deve retornar 1 para qualquer base com expoente 0', function () {
            assert.strictEqual(calc.potencia(5, 0), 1);
        });
    });

    // Testes para o método operar
    describe('operar', function () {
        it('deve retornar 9 para operar 4 + 5', function () {
            assert.strictEqual(calc.operar(4, 5, '+'), 9);
        });

        it('deve lançar um erro para operador inválido', function () {
            assert.throws(() => calc.operar(4, 5, '%'), /Operador inválido\./);
        });
    });



});


