var assert = require("assert");

describe("matrix_multiplication", function() {
    it("Умножение матриц", function() {
        assert.deepEqual(
            matrix_multiplication(
                [
                    [1, -1],
                    [2, 0],
                    [3, 0]
                ],
                [
                    [1, 1],
                    [2, 0]
                ]
            ), [
                [-1, 1],
                [2, 2],
                [3, 3]
            ]
        );

        // BEGIN
        function matrix_multiplication(matrix1, matrix2) {
            var width = matrix2[0].length;
            var height = matrix1.length;
            var matrixRes = [];
            
            for (var h = 0; h < height; h++) {
                matrixRes[h] = [];
                for (var w = 0; w < width; w++) {
                    var cell = 0;
                    for (var i = 0; i < width; i++) {
                        cell += matrix1[h][i] * matrix2[i][w];
                    }
                    matrixRes[h][w] = cell;
                }
            }

            return matrixRes;
        }
        // END

    });
});
