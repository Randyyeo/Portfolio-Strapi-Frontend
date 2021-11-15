<template>
    <div>
        <Project :data="project" v-for="(project, index) in final_data(2)" :key="index" />
        
    </div>

</template>

<script>
import * as _ from "lodash";
    export default {
        props: {
            data: null
        },
        data(){
            return {
                
            }
        },
        methods: {
            final_data(index){
                console.log(index)
                return _.chunk(this.data,index)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>