(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var _getProperDivisorsSum = euler.constructor.utils.getProperDivisorsSum;
        var used = [];
        var totalSum = 0;
        for (let a = 2; a < args[0]; a++) {
            var b = _getProperDivisorsSum(a);
            var db = _getProperDivisorsSum(b);
            if (db == a && b !== a && db < args[0] && !used[a] && !used[b]) {
                used[a] = true;
                used[b] = true;
                totalSum += a + b;
            }
        }

        return totalSum;

    }, 21, [10000])
}())