(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var numRight = args[0];
        var numDown = args[1];

        var num = [];
        var den = [];

        // n!/k!(n-k)! (numRight+numDown)!/(numDown)!(numRight)!
        for (var i = numRight + 1; i <= numRight + numDown; i++) {
            num.push(i);
        }
        for (var i = 2; i <= numDown; i++) {
            den[i - 2] = i;
            for (var j = 0; j < num.length; j++) {
                if (num[j] % i == 0 && num[j] >= i) {
                    num[j] /= i;
                    den[i - 2] = 1;
                    break;
                }
            }
        }

        return num.reduce((a, b) => a * b) / den.reduce((a, b) => a * b);
    }, 15, [20, 20])
}())
