function sum () {
    var args = [].slice.call(arguments);
    //here args is an array
    return args.reduce((s, n) => s + n, 0);
  }