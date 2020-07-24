// Javascript is for Behaviour

// Objective 2: Create `button` and `circle` Javascript element variables with `element.querySelector()`
const circle = document.querySelector('.circle');
const button = document.querySelector('button');

// Objective 3: Add a `click` handler for our button using `addEventListener()`
testid.addEventListener('click', function(){
  // The code inside this block is invoked (i.e. the code is run) each time the toggle button is clicked.
  
  // Objective 4: Toggle a CSS class with `element.classList.toggle()`
  // If the `circle` element has class .fancy, remove it. If .fancy is absent, add it.
  circle.classList.toggle('fancy');
    console.log('testid :>> ', testid);
});