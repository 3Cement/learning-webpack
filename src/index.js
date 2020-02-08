// const shoppingCart = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
// console.log(shoppingCart);

// const person = {
//     name : 'Daniel'
// }

// console.log(person.name);

import './scss/style.scss';

class Client {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;        
    }

    displayCompleteName() {
        return ` ${firstname} ${lastname}`;
    }
}