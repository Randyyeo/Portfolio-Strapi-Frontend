<template>
    <div>
        
        <v-container class="my-12" v-if="details !== null">
            
    
            <v-row class="names"
                v-for="(detail, index) in details"
                :key="index" >
                <v-col cols="6" class="mt-8">
                    
                    
                    <img class="images" :src="`${detail.logo.url}`">
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
                                <v-card-title class="text-h5 grey ">
                                    Achievements
                                </v-card-title>
                                <v-list>
                                    <div v-if="detail.academic_achievements !== null">
                                        <v-subheader>Academic</v-subheader>
                                        
                                        <v-list-item v-for="(sub_detail,index) in detail.academic_achievements" :key="index" >
                                            <v-list-item-title>
                                                {{ sub_detail.title }}
                                                <v-spacer></v-spacer>
                                                <span class="subtitle">{{ sub_detail.year }}</span>
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
                                                <span class="subtitle">{{ sub_detail.year }}</span>
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
                                                <span class="subtitle">{{ sub_detail.year }}</span>
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
        <v-container v-if="details === null" class="delay">
            <h1 id="message">Sorry for the delay! All the information is hosted on a free server which takes sometime to boot up. You can refresh a few more times and wait 1-2mins for it to show.</h1>
        </v-container>
    
    </div>  
        
        

        
    
</template>

<script>
    export default {
        data(){
            return {
                
                hello: false,
                details: null
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
            this.get_education()
            
            
        },
        methods: {
            dialog(index){
                this.$store.commit("SET_DIALOG", index)
                
            },
            async get_education(){
                await this.$store.dispatch("getEducation", {}).then(res=>{
                    this.details = res.data.slice()
                    console.log(res)
                    
                    /* console.log(this.details) */
                
                    }).catch(error =>{
                        console.log(error)
                    })
            },
            /* close(id){
                let filter = this.details[id-1]
                filter.dialog = false
                this.details[id-1] = filter
                console.log(this.details)
            } */
        }
    }
</script>

<style lang="scss" scoped>
    img{
        height: 100%;
        width: 100%;
    }
    .names{
        text-align: center;
        margin-top: 20px
        
    }
    p{
            padding-top: 50px;
            font-size: 16px;
            
        }
    .subtitle {
        font-size: 15px;
    }
    .delay{
        width: 50%;
        margin: 4cm auto 0 auto;
        background-color: grey;
        border-radius: 12px;
        border: 2px solid white;
        #message{
            text-align: center;
            font-size: 25px;
            width: 80%;
            padding: 5% 0;
            margin: auto;
        }
    }
    @media (max-width: 600px) {
        .delay{
            #message{
                font-size: 10px
            }
        }
    }
</style>