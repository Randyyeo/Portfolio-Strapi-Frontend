<template>
    <div class="mt-6">
        <MyProjects :data="projects" />
    </div>
</template>

<script>
    import * as _ from "lodash"
    export default {
        data(){
            return {
                projects: null
            }
        },
        props: {
            data: null
        },
        mounted(){
            this.get_projects()
        },
        methods: {
            async get_projects(){
                await this.$store.dispatch("getProjects").then(res=>{
                    let data = res.data.slice();
                    this.projects = _.chunk(data, 2);
                
                    }).catch(error =>{
                        console.log(error)
                    })
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>