//exporting a class
export default class NameComponent {

    constructor(name) {
        this.name = name
    }

    displayCtorNameInUppercase() {
        return this.name.toUpperCase();
    }

    displayNameInUppercase(name) {
        return name.toUpperCase();
    }
}

