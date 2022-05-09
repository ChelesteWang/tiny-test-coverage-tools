let App = function () {
    this.name_ = "i am app";
};

App.prototype.sayHi = function () {
    alert(this.name_ + ",nice to meet you");
};