(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var _largeFibonacci = euler.constructor.utils.largeFibonacci;
        var i = 2;
        var n = _largeFibonacci(i);
        while (n.length < args[0]) {
            i++;
            n = _largeFibonacci(i);
            console.log(i,n)
        }
        
        return i;
    }, 25, [1000]) //2783915460
}());