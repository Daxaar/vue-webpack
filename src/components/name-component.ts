//exporting a class
export default class NameComponent {

    constructor(private name: String = null) {
        this.name = name
    }

    displayCtorNameInUppercase() {
        console.log('displayCtorNameInUppercase:', this.name);
        return this.name.toUpperCase();
    }

    displayNameInUppercase(name: String) {
        console.log('displayNameInUppercase:', name);
        return name.toUpperCase();
    }
}

