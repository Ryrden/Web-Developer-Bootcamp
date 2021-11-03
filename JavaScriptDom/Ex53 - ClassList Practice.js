const li = document.querySelectorAll('ul li');

li.forEach(element => {
    element.classList.toggle('highlight');
});