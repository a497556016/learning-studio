import document from "../../api/document";

export default {
    namespaced: true,
    state: {
        documents: [],
        page: {}
    },
    getters: {},
    mutations: {
        setDocuments(state, data){
            state.documents = data._embedded.documents;
            state.page = data.page;
        }
    },
    actions: {
        async saveDocument(context, doc){
            await document.save(doc);
        },
        // eslint-disable-next-line no-unused-vars
        async findByPage(context){
            const data = await document.findByPage();
            context.commit('setDocuments', data);
        }
    }
}