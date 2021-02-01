(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {

        // RIGHT = 1
        var numRight = args[0];
        // DOWN = 0
        var numDown = args[1];

        var total = numRight + numDown;
        var startString = ''.padStart(numDown, '0') + ''.padStart(numRight, '1');
        var endString = ''.padStart(numRight, '1') + ''.padStart(numDown, '0');
        // var 
        // var _getCollatzSequence = euler.constructor.utils.getCollatzSequence;
        return endString + '|' + startString;
    }, 15, [2, 2])
}())