// Imperative approach - we explicitly describe HOW to achieve the result

// Get reference to the DOM element where we'll append our content
const app = document.getElementById('app');

// Create a new paragraph element
const paragraph = document.createElement('p');

// Set the text content of the paragraph
paragraph.textContent = 'Hello, World!';

// Set some styles imperatively
paragraph.style.color = 'blue';
paragraph.style.fontSize = '24px';
paragraph.style.textAlign = 'center';
paragraph.style.marginTop = '50px';

// Append the paragraph to the app container
app.appendChild(paragraph);

// Additional imperative logic: Add a click event handler
paragraph.addEventListener('click', function() {
    this.style.color = this.style.color === 'blue' ? 'red' : 'blue';
});