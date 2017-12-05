function solve (args) {
  var link = args[0];
  
  var protocol = link.split('://');
  console.log('protocol: ' + protocol[0]);

  var server = protocol[1].split('/');
  console.log('server: ' + server[0]);

  var resource = link.split(server[0]);
  console.log('resource: ' + resource[1]);

}

solve([ 'http://telerikacademy.com/Courses/Courses/Details/239' ]);