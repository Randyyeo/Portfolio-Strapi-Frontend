<template>
    <div>
        
        <v-container class="my-12">
            
    
            <v-row class="names"
                v-for="(detail, index) in details"
                :key="index">
                <v-col cols="6">
                    
                    
                    <img :src="`http://localhost:1337${detail.logo.formats.thumbnail.url}`">
                </v-col>
                <v-col cols="6">
                    <p>School : {{ detail.name }} <br>
                    Education : {{ detail.type }} <br>
                    Years: {{ detail.year_start }} - {{ detail.year_end }}</p>
                    
                    
                        
                        <v-dialog
                            v-model="detail.dialog"
                            width="500"
                            :retain-focus="false"
                            >
                            <template v-slot:activator="{ on }">
                                <v-btn
                                dark
                                
                                v-on="on"
                                
                                >
                                Show More
                                </v-btn>
                            </template>

                            <v-card>
                                <v-card-title class="text-h5 grey lighten-2">
                                    Achievements
                                </v-card-title>
                                <v-list>
                                    <div v-if="detail.academic_achievements !== null">
                                        <v-subheader>Academic</v-subheader>
                                        
                                        <v-list-item v-for="(sub_detail,index) in detail.academic_achievements" :key="index" >
                                            <v-list-item-title>
                                                {{ sub_detail.title }}
                                                <v-spacer></v-spacer>
                                                {{ sub_detail.year }}
                                            </v-list-item-title>
                                        </v-list-item>
                                    </div>
                                </v-list>
                                <v-divider></v-divider>
                                <v-list>
                                    <div v-if="detail.sports_achievements !== null">
                                    <v-subheader>Sports</v-subheader>
                                    
                                        <v-list-item v-for="(sub_detail,index) in detail.sports_achievements" :key="index">
                                            <v-list-item-title>
                                                {{ sub_detail.title }}
                                                <v-spacer></v-spacer>
                                                {{ sub_detail.year }}
                                            </v-list-item-title>
                                        </v-list-item>
                                    </div>
                                </v-list>
                                <v-divider></v-divider>
                                <v-list>
                                    <div v-if="detail.leadership_achievements !== null">
                                    <v-subheader>Leadership</v-subheader>
                                    
                                        <v-list-item v-for="(sub_detail,index) in detail.leadership_achievements" :key="index">
                                            <v-list-item-title>
                                                {{ sub_detail.title }}
                                                <v-spacer></v-spacer>
                                                {{ sub_detail.year }}
                                            </v-list-item-title>
                                        </v-list-item>
                                    </div>
                                </v-list>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="primary"
                                        text
                                        @click="detail.dialog = false"
                                    >
                                        Close
                                    </v-btn>
                                </v-card-actions>
                                
                                

                                
                            </v-card>
                        </v-dialog>
                    
                </v-col>
            </v-row>
        </v-container>
    
    </div>  
        
        

        
    
</template>

<script>
    export default {
        data(){
            return {
                
                hello: false,
                details: this.$store.getters.education
            }
        },
        
        computed: {
            /* details(){
                let oldArr = this.$store.getters.education
                let newArr = [...oldArr]
                return newArr
            }, */
            /* sub_details(){
                let details = this.$store.getters.education
                let id = this.$store.state.id
                return details.filter(ele => ele.id == id)
            } */
            
        },
        mounted(){
            this.$store.dispatch("getEducation", {}).then(res=>{
                
                
            }).catch(error =>{
                console.log(error)
            })
            
            
        },
        methods: {
            dialog(index){
                this.$store.commit("SET_DIALOG", index)
                
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