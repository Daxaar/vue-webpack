import NameComponent from './components/name-component'
import instance from './components/name-component-instance';
import { Person } from './components/typescript-component.ts';

class App {

    createPerson() {
        var person = new Person('darren', 'lewis');
        console.log('fullName = ',person.fullName);
    }
    getName() {
        var comp = new NameComponent();
        var name = comp.displayNameInUppercase("Darren Lewis 2");
        console.log("name", name);
        console.log('instance name',instance.displayCtorNameInUppercase());
    }
}

var app = new App();
app.getName();
app.createPerson();