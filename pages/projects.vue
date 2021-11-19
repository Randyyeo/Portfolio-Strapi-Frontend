<template>
  <v-app>
  <div class="mt-5" data-aos="fade-up">
    <v-row class="mb-5 justify-center text-center">
      <v-col lg="2" md="3" sm="5" cols="6">
        <p class="mb-3">Filter projects based on frameworks</p> 
        <select name="" @change="select_lan()"  v-model="select" class="form-select" id="">
          <option :value="lan" v-for="lan in languages" :key="lan" >{{lan}}</option>
        </select>
        
      </v-col>
    </v-row> 
    <v-row class="mb-5 w-50 mx-auto justify-space-around text-center">
      <v-col cols="6" lg="3" md="4" sm="5" v-for="select in selected" :key="select">
        <v-btn class="languages" ><v-icon class="btn-icon" @click="remove(select)">mdi-delete</v-icon><span class="word">{{select}}</span></v-btn>
      </v-col>
    </v-row> 
    
    
    <MyProjects :data="filter ? project : projects" v-if="projects !== null" />
    <v-container v-if="projects === null" class="delay">
      <p id="message">
        Sorry for the delay! All the information is hosted on a free server
        which takes sometime to boot up. You can refresh a few more times and
        wait 1-2mins for it to show.
      </p>
    </v-container>
  </div>
  
  </v-app>
</template>

<script>
import * as _ from "lodash";
import aosMixin from "~/mixins/aos";
export default {
  mixins: [aosMixin],
  data() {
    return {
      projects: null,
      filter: false,
      selected: [],
      languages: null,
      select: null,
      error: false
    };
  },
  props: {
    data: null,
  },
  computed:{
    project(){
      if (this.filter){
        var sub_arr = []
        
        for (var sub of this.projects){
          for (var lang of sub.languages){
            
            if (this.selected.includes(lang.language)){
              
              sub_arr.push(sub)
              break;
            }
          }
        }
        
        return sub_arr;
      }
      
    }
  },
  mounted() {
    this.get_projects();
    this.get_languages();
    
  },
  methods: {
    remove(lan){
      
      for (var i=0; i<this.selected.length;i++){
        if (this.selected[i] == lan){
          this.languages.push(lan)
          this.selected.splice(i,1)
          if (i == 0){
            this.filter = false;
          }
        }
      }
    },
    select_lan(){
      this.filter = true
      if (!this.selected.includes(this.select)){
        this.selected.push(this.select)
        
        /* var index = this.languages.indexOf(this.select)
        this.languages.splice(index,1) */
        this.languages = this.languages.filter(ele=>{
          return ele !== this.select
        })
        if (this.selected.includes(undefined)){
          this.selected =this.selected.slice(0, this.selected.length-1)
        }
        
      } 
      
      
    },
    async get_projects() {
      await this.$store
        .dispatch("getProjects")
        .then((res) => {
          
          let data = res.data.slice();
          this.projects = data.reverse()
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async get_languages(){
      await this.$store
        .dispatch("getLanguages")
        .then((res) => {
          
          let data = res.data.slice();
          
          this.languages = data.map(ele=>{
            return ele.language
          })
          
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>

<style lang="scss" scoped>

.delay {
  width: 50%;
  margin: 2cm auto 0 auto;
  background-color: grey;
  border-radius: 12px;
  border: 2px solid white;
  #message {
    text-align: center;
    font-size: 25px;
    width: 80%;
    padding: 5% 0;
    margin: auto;
  }
}
.word{
  display: block;
}
.btn-icon{
  display: none;
}
.languages{
  width: 100px;
}
.languages:hover .word{
  display: none;
}
.languages:hover .btn-icon{
  display: block;
}
@media (max-width: 600px) {
        .delay{
            #message{
                font-size: 10px
            }
        }
    }
</style>
