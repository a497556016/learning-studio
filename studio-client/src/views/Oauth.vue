<template>
    <div>
        登录跳转中...
    </div>
</template>

<script>
    import {createNamespacedHelpers} from "vuex";
    const appStore = createNamespacedHelpers("app");
    import OauthService from "../api/oauth";
    export default {
        name: "Oauth",
        data(){
            return {
                loginPage: null
            }
        },
        async created() {
            const query = this.$route.query;
            if(query.code) {
                const data = await OauthService.token({
                    code: query.code,
                    state: query.state
                });
                const user = await OauthService.user(data.access_token);
                console.log(user);
                this.setLoginUser({
                    userInfo: {
                      username: user
                    },
                    tokenInfo: data
                });
                await this.$router.push("/");
            } else {
                window.location.href = 'http://localhost:8081/oauth/authorize?response_type=code&client_id=LearnStudio&redirect_uri=http://localhost:8080/oauth&state=MyLove'
            }
        },
        methods: {
            ...appStore.mapMutations({
                setLoginUser: 'setLoginUser'
            })
        }
    }
</script>

<style scoped>

</style>