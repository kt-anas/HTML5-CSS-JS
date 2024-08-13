

<div id="parent">
  <button id="child">Click me</button>
</div>




document.getElementById('parent').addEventListener('click', function() {
    alert('Parent element clicked!');
});

document.getElementById('child').addEventListener('click', function(event) {
    alert('Child element clicked!');
});





document.getElementById('child').addEventListener('click', function(event) {
    event.stopPropagation(); // This stops the event from bubbling up
    alert('Child element clicked!');
});






