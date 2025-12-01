import Customer from "./customer";
import Address from "./address";

const address = new Address("Minha Rua 67", "Meu Bairro", "Minha Cidade", "RS")
const customer1 = new Customer("Emerson", "contato@gmail.com", new Date(2005, 4, 28), address);
const customer2 = new Customer("Pedro Duarte", "email@.com", new Date(2014, 10, 3), address)
//customer1.name = "Emerson"
console.log(customer1.isAdult())
console.log(customer2.isAdult())
console.log(customer1.getFirstName())
console.log(customer2.getFirstName())
console.log(customer1.address.toString())


