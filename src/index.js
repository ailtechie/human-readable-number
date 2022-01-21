module.exports = function toReadable (number) {
    let numStr = number.toString();
    let arr1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let arr2 = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let i = 0;
    if(number >= 100 && number % 100 === 0) {
        return numStr = `${arr1[Number(numStr[0])]} hundred`;
    }else if(number > 100 && number % 100 !== 0) {
        if(number % 10 === 0) {
            if(number % 100 >= 20) {
            return numStr = `${arr1[Math.floor(number / 100)]} hundred ${arr2[i = Number(numStr[1] - 2)]}`;
            }
            return numStr = `${arr1[Math.floor(number / 100)]} hundred ${arr1[number % 100]}`;
        }else if(number % 10 !== 0) {
            if(number % 100 >= 20) {
            return numStr = `${arr1[Math.floor(number / 100)]} hundred ${arr2[i = Number(numStr[1] - 2)]} ${arr1[number % 10]}`;
            }
            return numStr = `${arr1[Math.floor(number / 100)]} hundred ${arr1[number % 100]}`;
        }      
    }else if(number >= 20) {
        if(number % 10 === 0) {
        return numStr = arr2[i = number / 10 - 2];
        }
        return numStr = `${arr2[i = Math.floor(number / 10) - 2]} ${arr1[numStr[1]]}`;
    }else if(number <= 20) {
    return numStr = arr1[number];    
    }
}