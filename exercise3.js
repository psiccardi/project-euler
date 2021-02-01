(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        console.log(args);
        var startPrimes = [2, 3, 5];
        var num = args[0];
        var primesNum = 5;
        var factors = [];
        var _getPrimes = euler.constructor.utils.getPrimes;

        if (args[0] <= 6) {
            startPrimes = _getPrimes(6);
            console.log(startPrimes);
            while (num !== 1) {
                for (let i = 0; i < startPrimes.length; i++) {
                    if (num % startPrimes[i] == 0) {
                        if (factors.indexOf(startPrimes[i]) == -1) {
                            factors.push(startPrimes[i]);
                        }
                        num /= startPrimes[i]
                    }
                }
            }
        } else {
            while (num !== 1) {
                while (num !== 1) {
                    startPrimes = _getPrimes(primesNum);
                    primesNum += 2;

                    for (let i = 0; i < startPrimes.length; i++) {
                        if (num % startPrimes[i] == 0) {
                            if (factors.indexOf(startPrimes[i]) == -1) {
                                factors.push(startPrimes[i]);
                            }
                            num /= startPrimes[i]
                        }
                    }
                }
            }
        }

        return factors[factors.length - 1];
    }, 3, [600851475143])
}())