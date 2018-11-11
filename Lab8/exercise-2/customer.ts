class Customer2{
    firstname: string;
    lastname: string;

    public greeter(){
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }
}

let customer = new Customer2();
customer.firstname = "John";
customer.lastname="Smith";
customer.greeter();