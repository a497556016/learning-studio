<template>
    <div>
        登录跳转中...
    </div>
</template>

<script>
    import {createNamespacedHelpers} from "vuex";
    const appStore = createNamespacedHelpers("app");
    import OauthService, {security} from "../api/oauth";
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
                console.log(data)
                const user = await OauthService.user(data.access_token);
                console.log(user);
                this.setLoginUser({
                    userInfo: user,
                    tokenInfo: data
                });
                await this.$router.push("/");
            } else {
                window.location.href = security.client.user_authorization_uri + '?response_type=code&client_id='+security.client.client_id+'&redirect_uri='+security.client.registered_redirect_uri+'&state=MyLove'
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