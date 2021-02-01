var euler = EulerFactory.getInstance('#select-exercise', '#result', function (value, euler) {
    console.log(value);

    if (value == '') {
        return;
    }
    euler.execute(value);
});