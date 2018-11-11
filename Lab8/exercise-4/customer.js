"use strict";
exports.__esModule = true;
var Customer4 = /** @class */ (function () {
    function Customer4(firstname, lastname) {
        this.firstName = firstname;
        this.lastName = lastname;
    }
    Customer4.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Customer4;
}());
exports.Customer4 = Customer4;
