<template>
    <v-app id="inspire">
        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            sm="8"
                            md="4"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="primary"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>登录</v-toolbar-title>
                                <v-spacer />

                            </v-toolbar>
                            <v-card-text>
                                <v-form
                                        ref="form"
                                        v-model="valid"
                                        lazy-validation
                                >
                                    <v-text-field
                                            label="用户名"
                                            v-model="userAccount.username"
                                            prepend-icon="mdi-person"
                                            type="text"
                                            :rules="[(v) => !!v||'用户名不能为空！']"
                                    />

                                    <v-text-field
                                            label="密码"
                                            v-model="userAccount.password"
                                            prepend-icon="mdi-lock"
                                            type="password"
                                            :rules="[(v) => !!v||'密码不能为空！']"
                                    />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn color="primary" @click="validate" :disabled="!valid">登录</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import {createNamespacedHelpers} from "vuex";
    const appStore = createNamespacedHelpers("app");
    export default {
        name: "Login",
        data: () => ({
            valid: false,
            userAccount: {
                username: '',
                password: ''
            }
        }),
        methods: {
            ...appStore.mapActions({
                login: "login"
            }),
            async validate(){
                if(this.$refs.form.validate()){
                    await this.login(this.userAccount);
                    await this.$router.push("/");
                }
            }
        }
    }
</script>

<style scoped>

</style>