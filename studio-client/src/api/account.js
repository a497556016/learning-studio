import http from "../utils/net/http"

export default {
    oauth2Login(username, password){
        return http.post("oauth/token", null, {
            params: {
                username,
                password,
                grant_type: "password",
                client_id: "lucky",
                client_secret: "123456"
            }
        })
    }
}