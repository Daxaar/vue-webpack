import NameComponent from './components/name-component'

class App {
    getName() {
        var comp = new NameComponent();
        var name = comp.displayNameInUppercase("Darren Lewis 2");
        console.log("name", name);
    }
}

var app = new App();
app.getName();