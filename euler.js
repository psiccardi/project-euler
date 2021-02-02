var EulerFactory = (
    function () {
        var eulerInstance = null;
        var Euler = function (select, output, selectCallback) {
            this.selectElement = document.querySelector(select);
            this.outputElement = document.querySelector(output);
            this.selectCallback = selectCallback;
            this.functions = {};
        };

        //EULER UTILITY FUNCTIONS
        Euler.utils = {};
        Euler.utils.checkMultiple = function (n1, n2) {
            if (n1 % n2 === 0) {
                return true;
            }
            return false;
        }

        Euler.utils.getTriangleNumber = function (n) {
            return (n * (n + 1) / 2);
        };

        Euler.utils.getDivisorsNumber = function (n) {
            if (n <= 1) {
                return 1;
            }
            var max = n;
            var sum = 0;
            for (i = 1; i <= max; i++) {
                if (n % i == 0) {
                    max = n / i;
                    sum++;
                    if (i != max) {
                        sum++
                    }
                }
            }
            return sum;
        }

        Euler.utils.getDivisors = function (n) {
            var divisors = [];
            if (n <= 1) {
                return [1];
            }
            var max = n;
            for (i = 1; i < max; i++) {
                if (n % i == 0) {
                    divisors.push(i);
                    max = n / i;
                    if (i != max) {
                        divisors.push(max);
                    }
                }
            }

            return divisors;
        }

        Euler.utils.stringReplaceAt = function (str1, index, str2) {
            return str1.substr(0, index) + str2 + str1.substr(index + str2.length);
        }

        Euler.utils.getCollatzSequence = function () {
            var sequences = {};
            return function (n) {
                if (sequences[n]) {
                    return sequences[n];
                } else {
                    sequences[n] = [n];
                    var w = n;
                    while (w !== 1) {
                        if (w % 2 === 0) {
                            w = w / 2;
                        } else {
                            w = 3 * w + 1;
                        }
                        if (sequences[w]) {
                            sequences[n] = sequences[n].concat(sequences[w]);
                            break;
                        } else {
                            sequences[n].push(w);
                        }
                    }
                }

                return sequences[n];
            }
        }();

        Euler.utils.englishNum = function (number) {
            var words = {
                0: 'zero',
                1: 'one',
                2: 'two',
                3: 'three',
                4: 'four',
                5: 'five',
                6: 'six',
                7: 'seven',
                8: 'eight',
                9: 'nine',
                10: 'ten',
                11: 'eleven',
                12: 'twelve',
                13: 'thirteen',
                14: 'fourteen',
                15: 'fifteen',
                16: 'sixteen',
                17: 'seventeen',
                18: 'eighteen',
                19: 'nineteen',
                20: 'twenty',
                30: 'thirty',
                40: 'forty',
                50: 'fifty',
                60: 'sixty',
                70: 'seventy',
                80: 'eighty',
                90: 'ninety'
            }

            var words2 = {
                100: 'hundred',
                1000: 'thousand'
            }

            switch (true) {
                case typeof (words[number]) !== 'undefined':
                    return words[number];
                case number < 100:
                    var rest = number % 10;
                    var u = number - rest;
                    if (u == 0) {
                        return words[u];
                    }
                    return words[u] + '-' + words[rest];
                case number < 1000:
                    var rest1 = number % 100;
                    var u1 = number - rest1;
                    var u2 = u1 / 100;
                    if (rest1 == 0) {
                        return words[u2] + ' ' + words2[100];
                    }
                    return words[u2] + ' ' + words2[100] + ' and ' + Euler.utils.englishNum(rest1);
                case number === 1000:
                    return 'one ' + words2[1000];


            }
        }

        Euler.utils.largePow = function (...args) {
            var curNum = args[0];

            for (var i = 2; i <= args[1]; i++) {
                var _curNum = curNum;
                for (var j = 1; j < args[0]; j++) {
                    _curNum = Euler.utils.largeSum(_curNum, curNum);
                }
                curNum = _curNum;
            }
            return curNum;
        }

        Euler.utils.largeSum = function (a, b) {
            a = '' + a;
            b = '' + b;
            var maxLen = Math.max(a.length, b.length);

            a = a.padStart(maxLen, '0');
            b = b.padStart(maxLen, '0');

            var toAdd = 0;
            var tempSum = ''.padStart(maxLen, '0');
            for (let i = maxLen - 1; i >= 0; i--) {

                var sum = parseInt(a.charAt(i)) + parseInt(b.charAt(i)) + parseInt(toAdd);
                var rest = (sum % 10);
                tempSum = Euler.utils.stringReplaceAt(tempSum, i, '' + rest);

                toAdd = (sum - rest) / 10;
            }
            if (toAdd != 0) {
                tempSum = '' + toAdd + tempSum;
            }
            return tempSum;
        }

        Euler.utils.getPrimes = function () {
            var primes = [2, 3, 5];
            return function (n, nth) {
                var curPrimes = [];
                if (!nth) {
                    if (primes[primes.length - 1] > n) {
                        for (let i = 0; i < primes.length && primes[i] <= n; i++) {
                            curPrimes.push(primes[i]);
                        }
                        return curPrimes;
                    } else {
                        curPrimes = primes;
                        var curNum = curPrimes[curPrimes.length - 1] + 2;
                        for (let i = curNum; i <= n; i = i + 2) {
                            let found = false;
                            for (let j = 1; j < primes.length; j++) {
                                if (i % primes[j] == 0) {
                                    found = true;
                                    break;
                                }
                            }
                            if (!found) {
                                primes.push(i);
                                curPrimes = primes;
                            }
                        }
                        return curPrimes;
                    }
                } else {
                    if (primes.length >= n) {
                        return primes[n - 1];
                    } else {
                        var curNum = primes[primes.length - 1] + 2;
                        for (let i = curNum; primes.length < n; i = i + 2) {
                            let found = false;
                            for (let j = 1; j < primes.length; j++) {
                                if (i % primes[j] == 0) {
                                    found = true;
                                    break;
                                }
                            }

                            if (!found) {
                                primes.push(i);
                            }
                        }
                        return primes[n - 1];
                    }
                }
            }
        }();

        Euler.utils.reverseString = function (str) {
            str = ('' + str).split('');
            str = str.reverse();
            return str.join('');
        }

        Euler.utils.multiply = function (...args) {
            var result = 1;
            for (let i = 0; i < args.length; i++) {
                result *= args[i];
            }
            return result;
        }

        Euler.prototype.addFunction = function (fn, index, args) {
            if (!index) {
                let i = 1;
                for (let prop in this.functions) {
                    if (prop > i) {
                        i = prop + 1;
                    }
                }
                index = i;
            }
            args = args || [];

            this.functions[index] = { fn, args };
        }

        Euler.prototype.initSelect = function () {
            let self = this;
            let fns = this.functions;
            let firstOpt = document.createElement('option');
            firstOpt.value = '';
            firstOpt.text = 'Selezionare';
            this.selectElement.add(firstOpt);
            for (let prop in fns) {
                let option = document.createElement('option');
                option.value = prop;
                option.text = prop;
                this.selectElement.add(option);
            }
            this.selectElement.onchange = function (e) {
                self.selectCallback(e.target.value, self);
            }
        }
        Euler.prototype.init = function () {
            this.initSelect();
        }

        Euler.prototype.execute = function (index) {
            console.log(this.functions, index);
            if (this.functions[index]) {
                let result = 0;
                if (this.functions[index].result != undefined) {
                    result = this.functions[index].result;
                } else {
                    result = this.functions[index].fn.apply(null, this.functions[index].args);
                }
                this.outputElement.innerHTML = result;
                this.functions[index].result = result;
            }
        }

        return {
            getInstance: function (select, output, callback) {
                if (!eulerInstance) {
                    eulerInstance = new Euler(select, output, callback);
                }
                return eulerInstance;
            }
        }
    }());