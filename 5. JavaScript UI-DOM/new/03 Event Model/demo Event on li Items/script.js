var df =document.createDocumentFragment();

for (var i = 1; i < 11; i+=1) {
    var li = document.createElement('li');
    li.innerText = `Item ${i}`;

    df.appendChild(li);
}

document.getElementsByTagName('ul')[0].appendChild(df);

Array.from(document.getElementsByTagName('li'))
.forEach(li => li.addEventListener('click', function () {
    li.innerText += '@';
}));