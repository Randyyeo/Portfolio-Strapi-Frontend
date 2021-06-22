<template>
    <div>
        
        <v-container class="my-12">
            <v-row class="names"
                v-for="(detail, index) in details"
                :key="index">
                <v-col>
                    
                    
                    <img :src="`http://localhost:1337${detail.logo.formats.thumbnail.url}`">
                </v-col>
                <v-col >
                    <p>School : {{ detail.name }} <br>
                    Education : {{ detail.type }} <br>
                    Years: {{ detail.year_start }} - {{ detail.year_end }}</p>
                    
                    
                        <v-btn :to="`/education/${detail.id}`">
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
                return this.$store.getters.education
            }
        },
        mounted(){
            this.$store.dispatch("getEducation", {}).then(res=>{
                
                
            }).catch(error =>{
                console.log(error)
            })
            
            
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