function solve (args) {
  
  var input = args[0];

  input = replaceLinkTags(input);
  console.log(input);

  function replaceLinkTags (text) {
    var regex = /<\s*a\s+href\s*=\s*"(.*?)"\s*>(.*?)<\s*\/a\s*>/gi;
    return text.replace(regex, function(tag, url, content) {
        return '[' + content + ']' + '(' + url + ')';
    });
  }
}

solve([ '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>' ]);