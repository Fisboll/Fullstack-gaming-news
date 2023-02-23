var selectedPage = document.getElementById('forums'); // Looks for an element on the page with the id of selectedPage
selectedPage.onchange = function(){ //Specifies a function to run when selectedPage has been changed.
window.location = selectedPage.value; // Reloads the page at a new window location, 'this' refers to selectedPage. If you want less confusion you could write selectedPage.value instead.
};