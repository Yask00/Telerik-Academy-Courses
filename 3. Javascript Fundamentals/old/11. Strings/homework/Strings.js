//01.Reverse string----------------------------------------------

//function solve(args) {
//	
//  var word = args[0];
//  
//  console.log(reverse(word));
//
//  function reverse (s) {
//    var o = '';
//
//    for (var i = s.length - 1; i >= 0; i-= 1) {
//      o += s[i];
//    }
//    return o;
//  }
//  
//  
//}
//
//solve(['sample']);
//solve(['qwertytrewq']);


//02. Correct brackets----------------------------------------------

//function solve (args) {
//  var expression = args[0];
//  
//
//  console.log(bracketCounts(expression));
//  
//
//  function bracketCounts (word) {
//
//    var leftCount = 0,
//    rightCount = 0;
//
//    for (var i = 0; i < word.length; i+=1) {
//
//    if (word[i] == '(') {
//      leftCount += 1;
//      continue;
//    }
//    else if (word[i] == ')'){
//      rightCount += 1;
//      continue;
//      }
//      }
//      //console.log(leftCount);
//      //console.log(rightCount);
//
//      if (leftCount > rightCount) {
//        return ('Incorrect');
//      }
//      else if (leftCount < rightCount)  {
//        return ('Incorrect');
//      }
//      else{
//        return ('Correct');
//      }
//      }
//
//}
//
//solve(['((a+b)/5-d)']);
//solve([')(a+b))']);
//solve(['()))']);
//solve(['((()))']);


//03. Sub-string in text----------------------------------------------

//function solve (args) {
//  var searchedWord = args.shift();
//  var text = args [0];
//  var counter = 0;
//  
//  console.log(searchString(text, searchedWord));
//  
//
//  function searchString (word, wordToSearch) {
//      
//    var regExp = new RegExp (wordToSearch, 'gi');
//    return (word.match(regExp) || []).length;
//    }
//}
//
//
//solve([
//    'in', 
//    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
//]);


//04. Parse tags----------------------------------------------

function solve (args) {
  var text = args[0];
  //console.log(text);
  text = replaceTags(text);
  text = parseTags(text);
  console.log(text);

  function replaceTags (text) {
    text = text.replace(/<\s*upcase\s*>/gi, '<U>');
    text = text.replace(/<\s*\/upcase\s*>/gi, '</U>');
    text = text.replace(/<\s*lowcase\s*>/gi, '<L>');
    text = text.replace(/<\s*\/lowcase\s*>/gi, '</L>');
    text = text.replace(/<\s*orgcase\s*>/gi, '<O>');
    text = text.replace(/<\s*\/orgcase\s*>/gi, '</O>');
    return text;
  }

  function parseTags(text){
    var result = [],
		inputArr = text.split(''),
		tags = [],
		inTag = false,
		inClosingTag = false;

    for(var ind = 0; ind < inputArr.length; ind++){
        if(inputArr[ind] === '<'){
            inTag = true;
            continue;
        }

        if(inputArr[ind] === '/' && inTag){
            inClosingTag = true;
            continue;
        }

        if(inTag && !inClosingTag && inputArr[ind].match(/[a-z]/i)){
            tags.push(inputArr[ind]);
            continue;
        }

        if(inputArr[ind] === '>'){
            if(inClosingTag){
                tags.pop();
                inClosingTag = false;
            }
            inTag = false;
            continue;
        }

        if(!inTag){
            if(!tags.length){
                result.push(inputArr[ind]);
            }
            else{
                switch (tags[0]){
                    case 'L':
                        result.push(inputArr[ind].toLowerCase());
                        break;
                    case 'U':
                        result.push(inputArr[ind].toUpperCase());
                        break;
                    case 'O':
                         
                        result.push(inputArr[ind]);
                        
                            
                        
                        break;
                }
            }
        }
}
              return result.join('');
}
        
}

solve([ 'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anYThing</lowcase> else.' ]);
//We are liViNg in a YELLOW SUBMARINE. We doN't have anything else.


//05. nbsp----------------------------------------------

//function solve (args) {
//  var text = args[0];
//  //console.log(text);
//
//  text = replaceALL (text, ' ', '&nbsp;');
//  console.log(text);
//
//function replaceALL (text, toReplace, replacement) {
//  var regex = new RegExp(toReplace, 'gi');
//  return text.replace(regex, replacement)
//}
//
//}
//
//solve(['hello world']);
//solve(['This text contains 4 spaces!!']);


//06. Extract text from HTML----------------------------------------------


//function solve(args) {
//    let output = '';
//    let matchTags = /<.*?>/ig;
//
//    for (let line of args) {
//        output += line.replace(matchTags, '').trim();
//    }
//
//    console.log(output);
//}
//
//
//solve([
//    '<html>',
//    '  <head>',
//    '    <title>Sample site</title>',
//    '  </head>',
//    '  <body>',
//    '    <div>text',
//    '      <div>more text</div>',
//    '      and more...',
//    '    </div>',
//    '    in body',
//    '  </body>',
//    '</html>'
//]);


//07. Parse URL----------------------------------------------

//function solve (args) {
//  var link = args[0];
//  
//  var protocol = link.split('://');
//  console.log('protocol: ' + protocol[0]);
//
//  var server = protocol[1].split('/');
//  console.log('server: ' + server[0]);
//
//  var resource = link.split(server[0]);
//  console.log('resource: ' + resource[1]);
//
//}
//
//
//solve(['http://telerikacademy.com/Courses/Courses/Details/239']);


//08. Replace tags----------------------------------------------

//function solve (args) {
//  
//  var input = args[0];
//
//  input = replaceLinkTags(input);
//  console.log(input);
//
//  function replaceLinkTags (text) {
//    var regex = /<\s*a\s+href\s*=\s*"(.*?)"\s*>(.*?)<\s*\/a\s*>/gi;
//    return text.replace(regex, function(tag, url, content) {
//        return '[' + content + ']' + '(' + url + ')';
//    });
//  }
//}
//
//solve(['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>']);