import Person from "./person";
import Address from "./address";

export default class Customer extends Person {
    //name: string;
    //age: number;
    //email: string;
    //birthDate: Date;
    address: Address;


constructor(name: string, email: string, birthDate: Date, address: Address) {
    //this.name = name;
    //this.email = email;
    //this.birthDate = birthDate;
    //this.age = new Date().getFullYear() - birthDate.getFullYear();
    super(name, email, birthDate)
    this.address = address
}

    isAdult() {
        return this.age >= 18;
    }

    getFirstName() {
        return this.name.split(" ")[0];
    }

    getLastName(){
        return this.name.split(" ")[this.name.split(" ").length - 1]
    }


}