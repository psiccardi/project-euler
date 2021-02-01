(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var result = 0;
        var _getPrimes = euler.constructor.utils.getPrimes;
        var _lastCheck = 100000;
        var _len = 0;
        var primes = [];
        for (let i = 2; i <= args[0]; i = i + 2) {
            primes = _getPrimes(i);
            if (primes.length > _len) {
                _len = primes.length;
                result += primes[primes.length - 1];
                if (i > _lastCheck) {
                    console.log(primes, i);
                    _lastCheck += 100000;
                }
            }
            // if (primes.length !== _len) {
            //     result += primes[primes.length - 1];
            //     _len = primes.length;
            // }
            // if (i > _lastCheck) {
            //     console.log(result, i);
            //     _lastCheck += 100;
            // }
            if (i % 2 == 0) {
                i--;
            }
        }
        console.log(primes);
        return result;
    }, 10, [2000000])
}())