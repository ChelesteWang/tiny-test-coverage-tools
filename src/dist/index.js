let App = function () {
    lg("index.js", "1");
    this.name_ = "i am app";
    lg("index.js", "2");
};
lg("index.js", "3");
App.prototype.sayHi = function () {
    lg("index.js", "4");
    alert(this.name_ + ",nice to meet you");
    lg("index.js", "5");
};
lg("index.js", "6");