import http from "../utils/net/http";

export default {
    save(document){
        return http.post("/documents", document);
    },
    findByPage(){
        return http.get('/documents');
    }
}