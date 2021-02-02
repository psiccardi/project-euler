(function () {
    var euler = EulerFactory.getInstance();
    euler.addFunction(function (...args) {
        var startYear = args[0];
        var endYear = args[1];
        
        var months = [
            31,
            28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ];
        
        var weekDay = 0; //Monday (1900-01-01)
        var sundaysCount = 0;
        for (let year=1900;year<=endYear;year++) {
            for (let month=0;month<12;month++) {
                var monthDays = months[month];
                if (month == 1 && year % 4 === 0) {
                    monthDays = 29;
                }
                for (let day=1; day<=monthDays; day++) {
                    if (weekDay == 6 && day == 1 && year >= startYear) {
                        console.log(year+' '+(''+(month+1)).padStart(2,'0'))
                        sundaysCount++;
                    }
                    weekDay = (weekDay + 1) % 7;
                }
            }
        }

        return sundaysCount;
    }, 19, [1901, 2000])
}())