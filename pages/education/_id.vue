<template>
    <div class="pt-12">
        <v-container class="pt-12">
                
            <v-btn text to="/about" >
                <v-icon>mdi-arrow-left-thin-circle-outline  </v-icon>
            </v-btn>
            {{ detail[0] }}
            
        </v-container>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                details: this.$store.state.details,
            }
        },
        computed: {
            detail(){
                return this.details.find(v => v.id == this.$route.params.id)
            }
        },
        methods: {
            toShowDetails(){
                
                this.$store.dispatch("showDetail")
                this.$router.push("/about")
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>