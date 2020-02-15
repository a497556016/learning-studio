import SnackBars from "./SnackBars";

export default {
    install(Vue, vuetify){
        console.log(1111,vuetify)

        const Component = Vue.extend(SnackBars);
        const component = new Component(
            vuetify
        ).$mount();
        document.querySelector("body").appendChild(component.$el);


        Object.defineProperty(Vue.prototype, "$notify", {
            get() {
                return component.notify;
            }
        });

    }
}