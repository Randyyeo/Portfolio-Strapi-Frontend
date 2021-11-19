<template>
    <div >
        <h1 data-aos="fade-down" class="display-3 text-center mt-6">{{ detail.role }}</h1>
        <div data-aos="fade-up" class="text-center">
            <h3 class="mt-5">{{ detail.start }} - {{ detail.end }}</h3>
            <v-row class="title-row ">
                <v-col class="my-12 img">
                    <v-container class='container'>
                        <img :src="`${detail.logo[0].url}`">
                    </v-container>
                </v-col>
            </v-row>
            <v-row class="desc">
                <v-col>{{ detail.description }}</v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn to="/experience">
                        Let's explore further
                    </v-btn>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                details: this.$store.state.experience,
                
                
            }
        },
        computed: {
            detail(){
                return this.details.find(v => v.id == this.$route.params.id)
            }
        },

                
            
        
        
        /* computed: {
            role(){
                return this.data.role
            }
        } */
    }
</script>

<style lang="scss" scoped>
    img{
        height: 300px;
        width: auto
    }
    .title-row{
        height: auto;
        width: auto;
    }
    .container{
        height: 100px;
    }
    .desc{
        margin-top: 200px;
        margin-bottom: 50px
    }
    
    
</style>