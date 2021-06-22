<template>
  
  <v-app>
    <v-app-bar app fixed>
      
      <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          
          <v-btn to="/" class="elevation-0 mx-4">
            <v-icon>mdi-home</v-icon>
          </v-btn>
          <v-btn to="/education" text class="mx-4">
            Education
          </v-btn>
          <v-btn to="/experience" text class="mx-4">
            Experience
          </v-btn>
          <v-btn to="/contact" text class="mx-4">
            Contact
          </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
          <v-btn @click="show=!show" class="hidden-md-and-up" elevation="0">
            <v-icon>mdi-apps</v-icon>
          </v-btn>
        </v-toolbar-items>
        
        
      
    </v-app-bar>
    <v-navigation-drawer v-model='show' absolute temporary right>
      <v-list>
        <v-list-item>
          <v-btn to="/" > 
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn to="/education" >
            Education
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn to="/experience" >
            Experience
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn to="/contact" >
            Contact
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <Nuxt/>
    <v-footer fixed>
      <v-row class="justify-center py-4">
        <v-btn v-for="(link,index) in links" :key="index" icon class="mx-4" @click="goTo(link[1])">
          <v-icon>{{ link[0] }}</v-icon>
        </v-btn>
        <!-- <v-btn icon class="mx-4">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon class="mx-4">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon class="mx-4">
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn icon class="mx-4">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn> -->
      </v-row>
    </v-footer>
  </v-app>
  
</template>

<script>
  export default {
    data(){
      return {
        show: false,
        links: [["mdi-facebook", "https://www.facebook.com/randall.yeoshengkai"], 
        ["mdi-instagram", "https://www.instagram.com/only_randy/"],
        ["mdi-github", "https://github.com/Randyyeo"],
        ["mdi-linkedin", "https://www.linkedin.com/in/randall-yeo-243aa219b/"]]
      
      }
    },
    methods: {
      goTo(url){
        window.open(url)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>