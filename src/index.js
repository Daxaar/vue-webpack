import NameComponent from './components/name-component'
import instance from './components/name-component-instance';
import { Person } from './components/typescript-component.ts';

class App {

    createPerson() {
        var person = new Person('darren', 'lewis');
        console.log('person.fullName:',person.fullName);

        var el = document.getElementById("yourName");

        // console.log('el',el);
        if (!el) {
            console.log('element not found')
        } else {
            el.innerText('fullname is ' + person.fullName)
        }
    }
    getName() {
        var comp = new NameComponent();
        comp.displayNameInUppercase("Darren Lewis 2");
        instance.displayCtorNameInUppercase();
    }
}

var app = new App();
app.getName();
app.createPerson();