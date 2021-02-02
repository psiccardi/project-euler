(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var _largeFactorial = euler.constructor.utils.largeFactorial;
        var num = _largeFactorial(args[0]);
        return num.split('').reduce((a,b) => parseInt(a, 10) + parseInt(b, 10));
    }, 20, [100])
}())