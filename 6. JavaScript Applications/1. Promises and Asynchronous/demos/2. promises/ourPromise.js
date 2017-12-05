class OurPromise {
    constructor(asyncFunc) {
        const resolve = (value) => {
            this._successCallback(value);
        };
        const reject = (err) => {
            this._errorCallback(err);
        };

        async(resolve, reject);
    }

    then(successCallback, errorCallback) {
        this._successCallback = successCallback;
        this._errorCallback = errorCallback;
    }
}