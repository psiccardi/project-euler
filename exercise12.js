(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var _getTriangleNumber = euler.constructor.utils.getTriangleNumber;
        var _getDivisors = euler.constructor.utils.getDivisors;
        var numDivisors = args[0];
        var curDivisors = 1;
        var curTriangle = 0;
        var tNum = 0;
        while (curDivisors < numDivisors) {
            curTriangle++;
            tNum = _getTriangleNumber(curTriangle);
            var _curDivisors = _getDivisors(tNum);
            curDivisors = _curDivisors.length;
            if (curDivisors > 100)
                console.log(curDivisors, curTriangle);
        }

        return tNum;
    }, 12, [500])
}()) //result 76576500