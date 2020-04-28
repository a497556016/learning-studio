import account from "../../api/account";
import storage from "../../utils/storage";
const LOGIN_USER_KEY = "LOGIN_USER_KEY";
import {security} from "../../api/oauth";
export default {
    namespaced: true,
    state: {
        loginUser: null
    },
    getters: {
        getLoginUser(state) {
            if(!state.loginUser) {
                state.loginUser = storage.getObject(LOGIN_USER_KEY);
            }
            return state.loginUser;
        }
    },
    mutations: {
        setLoginUser(state, loginUser) {
            state.loginUser = loginUser;
            storage.put(LOGIN_USER_KEY, state.loginUser);
        },
        logout(state){
            state.loginUser = null;
            storage.remove(LOGIN_USER_KEY);
            window.location.href = security.resource.logout_uri
        }
    },
    actions: {
        async login({commit}, userInfo){
            const tokenInfo = await account.oauth2Login(userInfo.username, userInfo.password);
            commit('setLoginUser', {
                userInfo,
                tokenInfo
            });
        },

    }
}