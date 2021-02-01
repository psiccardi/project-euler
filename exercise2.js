(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var fibo = [0, 1];
        var m = 0;
        var sum = 0;
        while (m < args[0]) {
            var u = fibo[1];
            if (fibo[1] % 2 == 0) {
                sum += fibo[1];
                console.log(sum);
            }
            fibo[1] = fibo[1] + fibo[0];
            fibo[0] = u;
            m = fibo[1];
        }
        return sum;
    }, 2, [4000000])
}())
