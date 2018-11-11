class Customer3{
    private firstName: string;
    private lastName: string;

    constructor(firstname: string, lastname: string){
        this.firstName=firstname;
        this.lastName=lastname;
    }

    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}
let customer2 = new Customer3("John","Smith");
customer2.greeter();

