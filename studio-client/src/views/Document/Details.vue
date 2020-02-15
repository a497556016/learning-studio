<template>
    <div>
        <v-breadcrumbs :items="paths"></v-breadcrumbs>
    </div>
</template>

<script>
    export default {
        name: "BlogDetails",
        data: () => ({
            paths: [
                {text: "主页", to: "/"},
                {text: "详情"}
            ]
        })
    }
</script>

<style scoped>

</style>