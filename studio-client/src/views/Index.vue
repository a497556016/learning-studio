<template>
    <v-app>
        <v-navigation-drawer app color="primary" dark v-model="drawerVisible">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Study Studios
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        看看
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                    dense
                    nav
            >
                <v-list-item
                        link
                >
                    <v-list-item-icon>
                        <v-icon>mdi-home-edit</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>笔录</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                color="primary"
                dark
        >
            <v-app-bar-nav-icon @click="drawerVisible = !drawerVisible"></v-app-bar-nav-icon>

            <v-toolbar-title>Study Studios</v-toolbar-title>

            <v-btn text :to="page.path" class="ml-5" v-for="(page, index) in pages" :key="index">
                <v-icon>{{page.icon}}</v-icon>
                <span class="font-weight-bold">{{page.name}}</span>
            </v-btn>

            <v-spacer></v-spacer>
            <v-btn text>{{loginUser.userInfo.username}}</v-btn>
            <v-btn
                    href="https://github.com/a497556016"
                    target="_blank"
                    text
            >
                <span class="mr-2">Github</span>
                <v-icon>mdi-github-circle</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import {createNamespacedHelpers} from "vuex"
    const appStore = createNamespacedHelpers("app")
    export default {
        name: 'Index',

        components: {

        },

        data: () => ({
            drawerVisible: false,
            pages: [
                {name: "笔录", icon: "mdi-home-edit", path: "/"},
                {name: "关于", icon: "mdi-pirate", path: "/about"}
            ]
        }),
        computed: {
            ...appStore.mapGetters({
                loginUser: "getLoginUser"
            })
        }
    };
</script>
