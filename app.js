let numbers = [];

function getArray(){
    const input = document.getElementById("arrayInput").value;
    //7,1,2,3 => 7 1 2 3
    numbers = input.split(",")
         .map((num) => parseFloat(num.trim()))
         .filter((num) => !isNaN(num));

}

function displayResult(text){
    document.getElementById("result").innerText = text;
}

function sortArray(){
    getArray();
    displayResult("Ascending Sorted: "+numbers.sort((a,b) => a-b));
}
function findEven(){
    getArray();
    displayResult("Evens: "+ numbers.filter((num) => num % 2 === 0));
}

function findPrimes(){
    getArray();
    function isPrime(num){
        if(num < 2) return false;
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i == 0) return false;
        }
        return true;
    }
    displayResult("Primes: "+ numbers.filter(isPrime));
}

function findOdd(){
    getArray();
    displayResult("Odds: "+numbers.filter((num) => num % 2 === 1));
}
function findSum() {
    getArray();
    const sum = numbers.reduce((a, b) => a + b, 0);
    displayResult("Sum: " + sum);
}
function squareNumbers() {
    getArray();
    displayResult("Squares: " + numbers.map(num => num * num));
}
function reverseArray() {
    getArray();
    displayResult("Reversed: " + numbers.reverse());
}

function findMax() {
    getArray();
    displayResult("Max: " + Math.max(...numbers));
}
function findAverage(){
    getArray();
    if (numbers.length === 0) {
        displayResult("Average: N/A");
        return;
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const avg = sum / numbers.length;
    displayResult("Average: " + avg);
}

function findDuplicate() {
  getArray();
  const duplicates = numbers.filter(
    (num, index, arr) => arr.indexOf(num) !== index
  );
  displayResult("Duplicates: " + (duplicates.length ? duplicates : "None"));
}

function removeDuplicate(){
    getArray();
    const filteredArr = Array.from(new Set(numbers));
    displayResult("Remove Dulicates: "+filteredArr);
}
function findMin() {
    getArray();
    displayResult("Min " + Math.min(...numbers));
}
function findMedian() {
    getArray();
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
    displayResult("Median: " + median);
}
function findMode() {
    getArray();
    const freq = {};
    numbers.forEach(num => freq[num] = (freq[num] || 0) + 1);
    const maxFreq = Math.max(...Object.values(freq));
    const modes = Object.keys(freq).filter(num => freq[num] === maxFreq);
    displayResult("Mode: " + modes.join(", "));
}
function factorial(){
    getArray();
    function fact(n) {
        if (n < 0) return "NaN";
        if (n === 0 || n === 1) return 1;
        let res = 1;
        for (let i = 2; i <= n; i++) {
            res *= i;
        }
        return res;
    }
    const result = numbers.map(num => fact(Math.floor(num)));
    displayResult("Factorials: "+result);
}
function filter() {
  getArray();
  const value = parseFloat(document.getElementById("value").value);
  if (!isNaN(value)) {
    displayResult("Filtered: " + numbers.filter((num) => num > value));
  } else {
    displayResult("Enter a valid number for filtering");
  }
}