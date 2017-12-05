let links = document.links;

[].forEach.call(links, function (link) {
    link.href = 'http://google.com';
});