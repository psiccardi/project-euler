(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var _getCollatzSequence = euler.constructor.utils.getCollatzSequence;
        var maxLen = 0;
        var index = 0;
        var d = new Date().getTime();
        for (let i = 0; i <= args[0]; i++) {
            var seq = _getCollatzSequence(i);
            if (seq.length > maxLen) {
                index = i;
                maxLen = seq.length;
                console.log(i);
            }
        }
        console.log(((new Date).getTime() - d) / 1000);
        return index;
    }, 14, [1000000])
}())