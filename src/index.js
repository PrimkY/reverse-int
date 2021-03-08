module.exports = function reverse (n) {
    let number = Math.abs(n);
    let string = String(number).split("").reverse().join("");    
    return Number(string);
}
