(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var _largeSum = euler.constructor.utils.largeSum;
        var curNum = args[0];

        for (var i = 2; i <= args[1]; i++) {
            var _curNum = curNum;
            for (var j = 1; j < args[0]; j++) {
                _curNum = _largeSum(_curNum, curNum);
            }
            curNum = _curNum;
        }
        return curNum.split('').reduce((a, b) => parseInt(a, 10) + parseInt(b, 10));

    }, 16, [2, 1000])
}())