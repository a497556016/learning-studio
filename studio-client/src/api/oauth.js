import http from "../utils/net/http";

const security = {
    client: {
        client_id: "LearnStudio",
        client_secret: '123456',
        access_token_uri: "http://localhost:8081/oauth/token",
        user_authorization_uri: "http://localhost:8081/oauth/authorize",
        scope: "all",
        registered_redirect_uri: "http://localhost:8080/oauth"
    },
    authorization: {
        check_token_access: "http://localhost:8081/oauth/check_token"
    },
    resource: {
        token_info_uri: "http://localhost:8081/oauth/check_token",
        user_info_uri: "http://localhost:8081/user"
    },
}

export default {

    token(params){
        return http.post(security.client.access_token_uri, null, {
            params: {
                grant_type: 'authorization_code',
                code: params.code,
                client_id: security.client.client_id,
                client_secret: security.client.client_secret,
                redirect_uri: security.client.registered_redirect_uri
            }
        })
    },

    user(token){
        return http.get(security.resource.user_info_uri, {
            params: {
                token: token
            }
        })
    }
}