<div id="parent">
  <button id="child">Click me</button>
</div>








document.getElementById('parent').addEventListener('click', function() {
    alert('Parent element clicked during capturing phase!');
}, true);

document.getElementById('child').addEventListener('click', function() {
    alert('Child element clicked!');
}, true);
