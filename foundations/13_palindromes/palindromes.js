const palindromes = function (str) {
    const bank = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const newstr = str.toLowerCase().split('').filter((item) => bank.includes(item)).join('');

    const revstr = newstr.split('').reverse().join('');
return newstr===revstr;
};

// Do not edit below this line
module.exports = palindromes;
