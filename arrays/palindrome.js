const isPalindrome = function(value){
    return value === value.split("").reverse().join("");
};

const isPalindromeNumber = function(num){
    return num === Number(num.toString().split("").reverse().join(""));
};