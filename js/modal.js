// MULTIPLE MODALS

// Get the button that opens the modal
const btn = document.querySelectorAll("button.modal-button");

// All page modals
let modals = document.querySelectorAll('.modall');

// Get the <span> element that closes the modal
const spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (let i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modall = document.querySelector(e.target.getAttribute("href"));
    modall.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (let index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modall')) {
     for (let index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}