(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        //var _getPermutations = euler.constructor.utils.getPermutations;
        //var perm = _getPermutations(args[1], args[0]);
        //return perm[perm.length - 1];
        var _largeFactorial = euler.constructor.utils.largeFactorial;
        var returnArr = [];
        var digits = 0;
        var str = args[1].split('');
        var len = args[0]
        while (digits < str.length) {

        }


        //}, 23, [4, '012']) // 120
    }, 23, [1000000, '0123456789']) //2783915460
}());