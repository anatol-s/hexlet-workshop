var assert = require("assert");

describe("pow", function() {
    it("Возведение в степень", function() {
        assert.equal(pow(3, 2), 9);

        // BEGIN
        function pow(a, b) {
            var c = a;

            while (b > 1) {
                b--;
                a *= c;
            }

            return a;
        }
        // END

    });
});
