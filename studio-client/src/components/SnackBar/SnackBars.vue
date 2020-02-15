<template>
    <div>
        <v-snackbar v-for="(snackbar, index) in snackBars" :key="index" v-model="snackbar.value"
                    :timeout="snackbar.timeout"
                    :color="snackbar.color"
                    :top="snackbar.top"
                    :bottom="snackbar.bottom"
                    :left="snackbar.left"
                    :right="snackbar.right"
                    multi-line
                    @input="(value) => onInput(value, snackbar)"
        >
            <div v-html="snackbar.message"></div>
            <v-btn color="primary" dark text @click="close(snackbar)">x</v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    export default {
        name: "SnackBars",
        props: {
            /*snackBars: {
                type: Array,
                default: () => []
            }*/
        },
        data(){
            return {
                snackBars: []
            }
        },
        methods: {
            addSnackBar(snackbar){
                const options = Object.assign({
                    value: true,
                    timeout: 3000,
                    color: "#559d68",
                    top: true
                }, snackbar);

                options.timestamp = new Date();
                options.timestamp.setMilliseconds(
                    options.timestamp.getMilliseconds() + this.snackBars.length
                );
                this.snackBars.push(options);
            },
            removeSnackBar(timestamp){
                const indexToDelete = this.snackBars.findIndex(n => n.timestamp === timestamp);
                if (indexToDelete !== -1) {
                    this.snackBars.splice(indexToDelete, 1);
                }
            },
            notify(snackbar){
                if(snackbar instanceof Array) {
                    snackbar.forEach(sb => {
                        this.addSnackBar(sb);
                    })
                }else {
                    this.addSnackBar(snackbar);
                }
            },
            close(snackbar){
                this.removeSnackBar(snackbar.timestamp);
            },
            onInput(value, snackbar){
                console.log(value)
                if(!value) {
                    this.close(snackbar);
                }
            }
        }
    }
</script>

<style scoped>

</style>