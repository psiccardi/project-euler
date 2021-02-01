(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var result = 0;
        var _multiply = euler.constructor.utils.multiply;

        for (let a = 1; a <= args[0]; a++) {
            var found = false;
            for (let b = 1; b <= args[0]; b++) {
                let _a = a, _b = b, _c = Math.sqrt(a * a + b * b);
                if (_a + _b + _c == args[0]) {
                    result = _a * _b * _c;
                    found = true;
                    break;
                }
            }
            if (found)
                break;
        }
        return result;
    }, 9, [1000])
}())