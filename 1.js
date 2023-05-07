const express =require('express');
const app = express();

// Define a route that accepts two numbers as parameters
app.get('/calculate/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);

  // Perform arithmetic operations on the numbers
  const sum = num1 + num2;
  const difference = num1 - num2;

  // Send the results back to the client
  res.send(`Sum: ${sum}, Difference: ${difference}`);
});

// Serve the client page with a button to trigger the calculation
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <input type="number" id="num1" />
        <input type="number" id="num2" />
        <button onclick="calculate()">Calculate</button>
        <div id="result"></div>
        <script>
          function calculate() {
            const num1 = document.getElementById('num1').value;
            const num2 = document.getElementById('num2').value;
            fetch('/calculate/' + num1 + '/' + num2)
              .then(response => response.text())
              .then(result => {
                document.getElementById('result').innerText = result;
              });
          }
        </script>
      </body>
    </html>
  `);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});