// Part 2: JavaScript Functions

// Function with parameters and return values
function calculateArea() {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(width) || isNaN(height)) {
      alert('Please enter valid numbers for width and height.');
      return;
    }
  
    const area = width * height;
    document.getElementById('result').textContent = `Area: ${area}`;
  }
  
  // Function demonstrating scope
  let globalVar = 'I am global';
  
  function demonstrateScope() {
    let localVar = 'I am local';
    console.log(globalVar); // Accessible
    console.log(localVar); // Accessible
  }
  
  demonstrateScope();
  // console.log(localVar); // Uncaught ReferenceError: localVar is not defined
  
  // Function to toggle a CSS class
  function toggleModal() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('hidden');
  }
  
  // Part 3: Combining CSS Animations with JavaScript
  function triggerAnimation() {
    const box = document.getElementById('animated-box');
    box.classList.remove('animate-slide'); // Reset animation
    void box.offsetWidth; // Trigger reflow
    box.classList.add('animate-slide'); // Start animation
  }