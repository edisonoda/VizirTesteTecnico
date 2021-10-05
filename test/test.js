const assert = require("chai").assert;
const calcularCusto = require("../src/utils/CalcCusto.js");

describe("Calcular Custo", function() {
    it("Caso padrão", function() {
        let resultado = calcularCusto(31, "FaleMais 30", {
            origem: "11",
            destino: "16",
            custo: 1.90
        })

        assert.equal(resultado.custoComP, 2.09);
        assert.equal(resultado.custoSemP, 58.9);
    });

    it("Tempo negativo", function() {
        let resultado = calcularCusto(-1, "FaleMais 30", {
            origem: "11",
            destino: "16",
            custo: 1.90
        })

        assert.equal(resultado.custoComP, 0);
        assert.equal(resultado.custoSemP, 0);
    });

    it("Taxa vazia", function() {
        let resultado = calcularCusto(-1, "FaleMais 30", {
            origem: 0,
            destino: 0,
            custo: 0
        })

        assert.equal(resultado.custoComP, 0);
        assert.equal(resultado.custoSemP, 0);
    });
});