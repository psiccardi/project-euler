(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var _largePow = euler.constructor.utils.largePow;
        var curNum = _largePow(args[0], args[1]);

        return curNum.split('').reduce((a, b) => parseInt(a, 10) + parseInt(b, 10));

    }, 16, [2, 1000])
}())