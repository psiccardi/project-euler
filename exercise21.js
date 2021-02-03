(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var _getDivisors = euler.constructor.utils.getDivisors;
        var sums = [];
        var used = [];
        var totalSum = 0;
        for (let a = 2; a < args[0]; a++) {
            var b = _getDivisors(a).reduce((x, y) => parseInt(x, 10) + parseInt(y, 10)) - a;
            var db = _getDivisors(b).reduce((x, y) => parseInt(x, 10) + parseInt(y, 10)) - b;
            if (db == a && b !== a && db < args[0] && !used[a] && !used[b]) {
                used[a] = true;
                used[b] = true;
                totalSum += a + b;
            }
        }

        return totalSum;

    }, 21, [10000])
}())