(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var _getProperDivisorsSum = euler.constructor.utils.getProperDivisorsSum;
        var abundants = [];
        var sum = 0;
        for (let i = 1; i <= args[0]; i++) {
            var pds = _getProperDivisorsSum(i);
            if (i < pds) {
                abundants.push(i);
            }
            var found = false;
            for (let j = 0; j < abundants.length; j++) {
                if (abundants.indexOf(i - abundants[j]) != -1) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                sum += i;
            }


        }
        return sum;
    }, 23, [28123])
}())