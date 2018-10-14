import NameComponent from './components/name-component'

import instance from './components/name-component-instance';

class App {
    getName() {
        var comp = new NameComponent();
        var name = comp.displayNameInUppercase("Darren Lewis 2");
        console.log("name", name);

        console.log('instance name',instance.displayCtorNameInUppercase());
    }
}

var app = new App();
app.getName();