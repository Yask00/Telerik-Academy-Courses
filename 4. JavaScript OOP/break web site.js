function rotateEl (el) {
    el.style.display = 'block';
    el.style.transform = `rotate(${(Math.random() * 10 - 5) | 0 }deg)`;

}   

function rotateRecursive (el) {
    rotateEl(el);
    [].slice.call(el.children).
        forEach(rotateRecursive);
}

rotateRecursive(document.body);