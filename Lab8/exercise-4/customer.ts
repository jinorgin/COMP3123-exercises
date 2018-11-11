export class Customer4{
    private firstName: string;
    private lastName: string;
    private age: number;


    constructor(firstname: string, lastname: string, age: number){
        this.firstName=firstname;
        this.lastName=lastname;
        this.age=age;
    }


    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    public getAge(){
        console.log(`Your age is ${this.age}`);
    }
}
