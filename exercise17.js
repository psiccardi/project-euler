(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var _englishNum = euler.constructor.utils.englishNum;
        var text = '';

        for (var i = args[0]; i <= args[1]; i++) {
            text += _englishNum(i);
        }
        return text.replace(/-| /g, '').length;
    }, 17, [1, 1000])
}())