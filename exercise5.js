(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var num = 0;
        for (i = 1; ; i++) {
            var found = 0;
            for (j = 1; j <= args[0]; j++) {
                if (i % j == 0) {
                    found++;
                } else {
                    break;
                }
            }
            if (found == args[0]) {
                num = i;
                break;
            }
        }
        return num;
    }, 5, [20])
}())