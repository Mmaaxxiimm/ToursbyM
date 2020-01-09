//start


//FUNCTION EXPRESSION TO SELECT ELEMENTS

const selectElement = (s) => document.querySelector(s);

//OPEN THE MENU ON CLICK
selectElement( s: '.open').addEventListener('click', () => {
    selectElement( s: '.nav-list').classList.add('active'); 
});

//CLOSE THE MENU ON CLICK
selectElement( s: '.close').addEventListener('click', () => {
    selectElement( s: '.nav-list').classList.remove( tokens: 'active');
});
