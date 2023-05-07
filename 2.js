const fs = require('fs');
const { Writable } = require('stream');

// Create a writable stream to write prime numbers to file
const writableStream = fs.createWriteStream('sample.txt');

// Function to check if a number is prime
function isPrime(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

// Write prime numbers up to 100 to the writable stream
for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    writableStream.write(`${i}\n`);
  }
}

// End the writable stream and log completion message
writableStream.end(() => {
  console.log('Task Completed');
});