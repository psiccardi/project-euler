(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var _getPrimes = euler.constructor.utils.getPrimes;
        return _getPrimes(args[0], true);
    }, 7, [10001])
}())