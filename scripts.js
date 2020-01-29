//start


//FUNCTION EXPRESSION TO SELECT ELEMENTS

const selectElement = (s) => document.querySelector(s);

//OPEN THE MENU ON CLICK
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active'); 
});

//CLOSE THE MENU ON CLICK
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});
