var Customer3 = /** @class */ (function () {
    function Customer3(firstname, lastname) {
        this.firstName = firstname;
        this.lastName = lastname;
    }
    Customer3.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Customer3;
}());
var customer2 = new Customer3("John", "Smith");
customer2.greeter();
