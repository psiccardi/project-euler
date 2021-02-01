(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var squareSum1 = 0;
        var squareSum2 = 0;
        for (let i = 1; i <= args[0]; i++) {
            squareSum1 += i * i;
            squareSum2 += i;
        }
        squareSum2 *= squareSum2;
        return squareSum2 - squareSum1;
    }, 6, [100])
}())