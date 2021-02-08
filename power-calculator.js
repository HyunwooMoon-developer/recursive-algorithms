//powerCalculator(10,2) should return 100
//powerCalculator(10,-2) should return exponent should be >= 0

const powerCalculator= function(base, exponent){
    if(exponent < 0){
        return 'Exponent shoul be >= 0'
    }
    else if(exponent === 0){
        return 1;
    }

    return base*powerCalculator(base, exponent -1)
}

console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, 0));
console.log(powerCalculator(10, -2));