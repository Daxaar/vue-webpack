//exporting a class
export default class NameComponent {

    constructor(name) {
        this.name = name
    }

    displayCtorNameInUppercase() {
        console.log('displayCtorNameInUppercase:', this.name);
        return this.name.toUpperCase();
    }

    displayNameInUppercase(name) {
        console.log('displayNameInUppercase:', name);
        return name.toUpperCase();
    }
}

