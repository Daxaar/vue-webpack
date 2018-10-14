import * as o from './components/name-component'
//import NameComponent from './components/name-component'

class App {
    getName() {
        // var comp = new NameComponent();
        // var name = comp.displayNameInUppercase("Darren Lewis");
        var name = o.displayNameInUppercase("Darren Lewis");
        console.log("name", name);
    }
}

var app = new App();

app.getName();