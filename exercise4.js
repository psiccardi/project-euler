(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var startNum = '';
        for (i = 0; i < args[0]; i++) {
            startNum += '9';
        }
        startNum = +startNum;
        console.log(startNum);
        var _reverse = euler.constructor.utils.reverseString;
        var result = 0;
        for (i = startNum; i > 0; i--) {
            for (j = i; j > 0; j--) {
                var num = j * i;
                if (num == _reverse(num)) {
                    if (num > result) {
                        result = num;
                    }
                    break;
                }
            }
        }
        return result;
    }, 4, [3])
}())