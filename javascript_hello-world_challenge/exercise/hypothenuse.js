var assert = require("assert");

describe("hypothenuse", function() {
    it("Нахождение гипотенузы из катетов для прямого треугольника", function() {
        assert.equal(hypothenuse(5, 6), Math.sqrt(61));

        // BEGIN
        function hypothenuse(a, b) {
            return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        }
        // END

    });
});
