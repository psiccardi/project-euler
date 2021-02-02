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
        
        var count = 2;
        var startNum = parseInt(startString,2) + 1;
        var endNum = parseInt(endString, 2) - 1;
        for (let i=startNum; i<=endNum; i++) {
            
        }
        return endString + '|' + startString;
    }, 15, [2, 2])
}())