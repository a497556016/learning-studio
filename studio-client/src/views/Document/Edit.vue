<template>
    <div>
        <v-breadcrumbs :items="[{text: '主页', to: '/'}, {text: '编辑'}]"></v-breadcrumbs>
        <v-container fluid>
            <v-card>
                <v-card-title>
                    <v-btn color="primary" @click="save">保存</v-btn>
                    <v-btn class="ml-2" @click="reset">清空</v-btn>
                </v-card-title>
                <v-card-text>
                    <v-text-field label="标题" v-model="document.title"></v-text-field>
                    <v-file-input label="上传封面" v-model="document.img"></v-file-input>
                    <mavon-editor :style="{height: editorHeight+'px'}" codeStyle="androidstudio" v-model="document.content" :toolbars="mavonOptions" :ishljs="true"></mavon-editor>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import {createNamespacedHelpers} from "vuex";
    const documentStore = createNamespacedHelpers("document");
    export default {
        name: "BlogEdit",
        data: () => ({
            document: {
                img: null,
                title: null,
                content: null
            },
            mavonOptions: {
                bold: true,
                italic: true,
                header: true,
                underline: true,
                strikethrough: true,
                mark: true,
                superscript: true,
                subscript: true,
                quote: true,
                ol: true,
                ul: true,
                link: true,
                imagelink: true,
                code: true,
                table: true,
                fullscreen: true,
                readmodel: true,
                htmlcode: true,
                help: true,
                /* 1.3.5 */
                undo: true,
                redo: true,
                trash: true,
                save: true,
                /* 1.4.2 */
                navigation: true,
                /* 2.1.8 */
                alignleft: true,
                aligncenter: true,
                alignright: true,
                /* 2.2.1 */
                subfield: true,
                preview: true
            }
        }),
        computed: {
            editorHeight(){
                return window.innerHeight - 380;
            }
        },
        methods: {
            ...documentStore.mapActions({
                saveDocument: "saveDocument"
            }),
            save(){
                this.saveDocument(this.document);
            },
            reset(){
                this.document = {};
            }
        }
    }
</script>

<style scoped>

</style>