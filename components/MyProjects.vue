<template>
    <div>
        <Project :data="project" v-for="(project, index) in data" :key="index" />
    </div>

</template>

<script>
    export default {
        props: {
            data: null
        },
        data(){
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>