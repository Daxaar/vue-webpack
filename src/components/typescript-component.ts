export class Person {

    constructor(private firstName: String, private lastName: String) {
        //console.log('creating person:',firstName,lastName);
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}