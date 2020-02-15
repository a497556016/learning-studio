<template>
    <v-dialog v-model="visible" scrollable max-width="250">
        <v-card>
            <v-card-title>{{title}}</v-card-title>
            <v-card-text>
                {{message}}
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="confirm">确认</v-btn>
                <v-btn @click="cancel">取消</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Confirm",
        data(){
            return {
                visible: false,
                title: null,
                message: null
            }
        },
        methods: {
            show(msg, title) {
                this.message = msg;
                this.title = title;
                this.visible = true;

                return new Promise((resolve, reject) => {
                    this.resolve = resolve;
                    this.reject = reject;
                });
            },
            hide(){
                this.visible = false;
            },
            confirm(){
                this.hide();
                if(this.resolve)
                this.resolve();
            },
            cancel(){
                this.hide();
                if(this.reject)
                this.reject();
            }
        }
    }
</script>

<style scoped>

</style>