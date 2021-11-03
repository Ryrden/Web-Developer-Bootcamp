const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const spans = document.querySelectorAll('h1 span');

let i = 0;
for (const color of colors) {
    spans[i].style.color = color;
    i++;
}