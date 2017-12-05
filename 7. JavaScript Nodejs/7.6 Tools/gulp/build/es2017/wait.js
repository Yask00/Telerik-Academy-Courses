function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const wait = seconds => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

const f = (() => {
    var _ref = _asyncToGenerator(function* () {
        yield wait(5);
        console.log('It works');
    });

    return function f() {
        return _ref.apply(this, arguments);
    };
})();