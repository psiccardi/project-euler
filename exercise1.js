(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        console.log(args);
        var _check = euler.constructor.utils.checkMultiple;
        var sum = 0;
        for (let i = 1; i < args[0]; i++) {
            if (_check(i, 3) || _check(i, 5)) {
                sum += i;
            }
        }
        return sum;
    }, 1, [1000])
}())
