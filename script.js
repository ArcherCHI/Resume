button1.addEventListener('click', function() {
  alert('You clicked the button!');
  toggle();
})

function toggle() {
  if (button1.style.backgroundColor === 'red') {
    button1.style.backgroundColor = 'green';
  } else {
    button1.style.backgroundColor = 'red';
  };
}