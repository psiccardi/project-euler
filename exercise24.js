(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        //var _getPermutations = euler.constructor.utils.getPermutations;
        //var perm = _getPermutations(args[1], args[0]);
        //return perm[perm.length - 1]; // LONG SOLUTION
        var _largeFactorial = euler.constructor.utils.largeFactorial;
        var returnArr = [];
        var digits = args[1].split('').sort((a,b) => a.localeCompare(b, undefined, { sensivity: 'base' }));
        console.log(digits);
        var len = args[0];
        while (digits.length > 0) {
            var fact = +_largeFactorial(digits.length);
            var fact2 = fact / digits.length;
            var c = Math.ceil(len / fact2) - 1;
            returnArr.push(digits.splice(c,1));
            console.log(digits);
            len -= c*fact2;
        }

        return returnArr.join('');
    }, 24, [1000000, '0123456789']) //2783915460
}());
