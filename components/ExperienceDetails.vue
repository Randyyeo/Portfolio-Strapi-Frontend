<template>
    <div>
        
        <v-container class="my-12">
            <v-row class="names"
                v-for="(detail, index) in details"
                :key="index">
                <v-col>
                    
                    
                    <img :src="`http://localhost:1337${detail.logo[0].url}`">
                </v-col>
                <v-col >
                    <p>
                        <u>Position</u> : {{ detail.role }} <br>
                        <u>Company</u> : {{ detail.company }}
                    </p>
                    
                        <v-btn @click="go(detail.id)">
                            Show Details
                        </v-btn>
                    
                </v-col>
            </v-row>
            
            
        </v-container>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                
            }
        },
        computed: {
            details(){
                
                return this.$store.getters.experience
            }
        },
        mounted(){
            this.$store.dispatch("getExperience", {}).then(res => {
                
            }).catch(error => {
                console.log(error)
            })

            
        },
        methods: {
            go(id){
                this.$store.commit("SET_ID", id)
                this.$router.push(`/experience/${id}`)
            }
        }
        
        
        
    }
</script>

<style lang="scss" scoped>
    img{
        height: 200px;
        width: auto;
    }
    .names{
        text-align: center;
        
    }
    p{
        padding-top: 25px;
        
    }
</style>