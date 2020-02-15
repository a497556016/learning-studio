import http from "../utils/net/http"

export default {
    save(document){
        return http.post("api/v1/documents", document);
    }
}