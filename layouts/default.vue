<template>
  
  <div>
    <nav>
        <div class="empty">
          
        </div>
        

        
        <ul :class="slide ? 'openNavLink' + ' ' + 'transition' : 'navLink' " >
          <li><a href="/">Home</a></li>
          <li><a href="./education">Education</a></li>
          <li><a href="./experience">Experience</a></li>
          <li><a href="./projects">Projects</a></li>
        </ul>
        
        <div class="burger" @click="navSlide">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    
    <Nuxt class="content"/>
    <footer>
      <div class="d-flex justify-content-center footer">
        
        <span v-for="(link,index) in links" :key="index"  class="links" @click="goTo(link[1])">
          
          <v-icon id="icon">{{ link[0] }}</v-icon>
        </span>
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
      </div>
    </footer>
  </div>
  
</template>

<script>
  export default {
    data(){
      return {
        show: false,
        links: [["mdi-facebook", "https://www.facebook.com/randall.yeoshengkai"], 
        ["mdi-instagram", "https://www.instagram.com/only_randy/"],
        ["mdi-github", "https://github.com/Randyyeo"],
        ["mdi-linkedin", "https://www.linkedin.com/in/randall-yeo-243aa219b/"]],
        slide: false
      
      }
    },
    methods: {
      goTo(url){
        window.open(url)
      },
      navSlide(){
        this.slide = !this.slide
      }

    }
  }
</script>

<style lang="scss" scoped>
  
  .content{
    margin-bottom: 1cm;
  }
  footer{
    background-color: #272727;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    
  }

  .footer{
    display: flex;
    color: white;
    justify-content: center;
    padding-top: 0.2cm;
  }

  .links{
    margin: 0 24px;
  }

  #icon{
    color: white;
    cursor: pointer;
    height: 40px;
    width: 40px;
    border-radius: 20px;
  }

  #icon:hover{
    background-color: rgb(141, 139, 139);
    
    
  }

  nav{
    background-color: #272727;
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 60px;
  }
  
  .openNavLink{
    background-color: #272727;
    display: flex;
    width: 45%;
    justify-content: space-around;
    height: 50px;
    /* padding-left: 8cm; */
    padding-top: 20px;
    margin-right: 6%;
  }

  .navLink{
    background-color: #272727;
    display: flex;
    width: 45%;
    justify-content: space-around;
    height: 50px;
    /* padding-left: 8cm; */
    padding-top: 10px;
    margin-right: 8%;
  }
  
  .openNavLink a{
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 15px;
    color: white;
    text-decoration: none;
    margin: 0 1cm;
    /* margin: 0 8px; */
    font-family: "Roboto", sans-serif;
  }

  .openNavLink li{
    list-style: none;
  }
  .navLink a {
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 25px;
  color: white;
  text-decoration: none;
  margin: 0 1cm;
  /* margin: 0 8px; */
  font-family: "Roboto", sans-serif;
  border-radius: 6px;
  width: 100px;
  }

  

  .navLink a:hover{
    
    transition: all 0.4s ease;
    padding: 0.3cm;
  }

  .navLink li {
  list-style: none;
  height: 40px;
  }

  .burger div {
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: white;
  }

  .burger {
  display: none;
  cursor: pointer;
  height:50px;
  margin-right: 6%;
  padding-top: 20px;
  }

 

  @media screen and (max-width: 1250px){
    .navLink{
        
        position: absolute;
        top: -100vh;
        
    }
    .transition {
        right: -6%;
    }

    .openNavLink{
      position: absolute;
        height: 100vh;
        top: 60px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: 0.5s;
        background-color: grey;
        z-index: 999;
    }

    .navLink li {
        list-style: none;
        margin-right: 33px;
        letter-spacing: 3px;
        font-weight: bold;
        font-size: 14px;
    }
    .burger {
        display: block;
    }
  }
</style>