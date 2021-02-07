(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        // var _largeFibonacci = euler.constructor.utils.largeFibonacci;
        var i = 2;
        var length = 0;
        var j = 0;
        for (i; i<args[0]; i++) {
            var usedRemainders = [];
            var result = '';
            var cur = 1;
            var w = 0;
            while(1 == 1) {
                var rest = cur % i;
                var resX = Math.floor(cur / i);
                var index = usedRemainders.indexOf(rest);
                if (w == 0) {
                    result += '0.';
                } else {
                    result += resX;
                }
                if (index !== -1) {
                    var u = usedRemainders.splice(index);
                    if (u.length > length) {
                        length = u.length;
                        j = i;
                    }
                    break;
                }
                
                if (rest === 0) {
                    break;
                }
                usedRemainders.push(rest);
                cur = rest * 10;
                
                w++;
            }
        }
        
        return j;
    }, 26, [1000]) //2783915460
}());

/* 1 / 3

    1       |_3___
    10      | 0.3
     1
*/