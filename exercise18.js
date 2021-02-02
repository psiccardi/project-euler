(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        //var _englishNum = euler.constructor.utils.englishNum;
        var triangle = args[0].split("\n").map(a => a.trim().split(" "))
        var partialSums = []
        for (let i = 0; i < triangle.length; i++) {
            partialSums[i] = [];
            for (let j = 0; j < triangle[i].length; j++) {
                if (typeof partialSums[i - 1] == 'undefined') {
                    partialSums[i].push([triangle[i][j]]);
                    continue;
                }
                partialSums[i][j] = [];
                if (typeof partialSums[i - 1][j - 1] !== 'undefined') {
                    for (let k = 0; k < partialSums[i - 1][j - 1].length; k++) {
                        partialSums[i][j].push(parseInt(partialSums[i - 1][j - 1][k], 10) + parseInt(triangle[i][j], 10));
                    }
                }
                if (typeof partialSums[i - 1][j] !== 'undefined') {
                    for (let k = 0; k < partialSums[i - 1][j].length; k++) {
                        partialSums[i][j].push(parseInt(partialSums[i - 1][j][k], 10) + parseInt(triangle[i][j], 10));
                    }
                }
            }
        }
        var lastSums = partialSums[partialSums.length - 1].flat(1).sort((a, b) => a - b);
        console.log(lastSums);
        return lastSums[lastSums.length - 1];
    }, 18, [`75
    95 64
    17 47 82
    18 35 87 10
    20 04 82 47 65
    19 01 23 75 03 34
    88 02 77 73 07 63 67
    99 65 04 28 06 16 70 92
    41 41 26 56 83 40 80 70 33
    41 48 72 33 47 32 37 16 94 29
    53 71 44 65 25 43 91 52 97 51 14
    70 11 33 28 77 73 17 78 39 68 17 57
    91 71 52 38 17 14 91 43 58 50 27 29 48
    63 66 04 68 89 53 67 30 73 16 69 87 40 31
    04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`])
}())
