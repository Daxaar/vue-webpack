import NameComponent from './components/name-component'
import instance from './components/name-component-instance';
import { Person } from './components/typescript-component.ts';
import * as $ from 'jquery';

class App {

    createPerson() {
        var person = new Person('darren', 'lewis');
        console.log('person.fullName:',person.fullName);

        var el = document.getElementById("yourName");

        if (!el) {
            console.log('element not found')
        } else {
            el.innerText = 'Your fullname is ' + person.fullName;
        }
    }
    getName() {
        var comp = new NameComponent();
        comp.displayNameInUppercase("Darren Lewis 2");
        instance.displayCtorNameInUppercase();
    }
}

$(function () {
//window.onload = () => {
    const app = new App();
    app.getName();
    app.createPerson();
//}
});
