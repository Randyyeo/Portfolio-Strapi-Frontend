<template>
    <v-container class=" my-12">
    <v-row class="pt-10">
      <v-col col="6" class="pt-16">
        <p class="my-8">Hi, I'm Randall</p>
        <h1>Motivator . Leader . Professional</h1>
        <p class="pt-4">Aspiring Software Developer/Engineer currently learning under the steps of Isobar Technical Team 😊</p> 
        <p class="website">This website uses <a href="https://www.nuxtjs.org">Nuxtjs</a> (Frontend), <a href="https://www.strapi.io">Strapi</a> (Backend) and <a href="https://www.mongodb.com">MongoDB</a> (Database). Deployed using <a href="https://www.heroku.com">Heroku</a> 
        and <a href="https://www.netlify.com">Netlify</a> </p>
        <NuxtLink to="/education"><span id="link">Learn more about my journey</span></NuxtLink>
      </v-col>
      <v-col col="6">
        <v-container>
           <img src="/Profile-Picture.jpg">
        </v-container>

      </v-col>
    </v-row>
    

    </v-container>
    
</template>

<script>
export default {

}
</script>


<style>
  .text{
    font-size: 30px;
  }
  img {
    max-width: 100%;  
    height: auto; 
  }
  p{
    font-size: 25px
  }
  #link{
    font-size: 20px;
  }
  .website{
    font-size: 22px
  }
</style>