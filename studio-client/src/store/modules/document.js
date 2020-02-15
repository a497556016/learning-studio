import document from "../../api/document";

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        async saveDocument(context, doc){
            await document.save(doc);
        }
    }
}