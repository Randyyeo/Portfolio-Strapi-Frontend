<template>
  <v-app>
    <v-container class="con mt-6 mb-12" style="width: 90%;">
      <div  class="pt-5 hidden-sm-and-down">
        <v-row>
          <v-col data-aos="fade-up" col="6" class="pt-16" >
            <p style="margin-top: 4cm;">Hi, I'm Randall</p>
            <h1>Motivator . Leader . Professional</h1>
            <p class="pt-4">
              Aspiring Quant Developer/Software Engineer 
            </p>
            <p class="website">
              Follow my journey as I explore more about Engineering in the Finance and Tech Industries
            </p>
            <NuxtLink to="/education"
              ><span id="link">Learn more about my journey</span></NuxtLink
            >
          </v-col>
          <v-col col="6">
            <v-container>
              <img data-aos="zoom-in" src="/Profile-Picture.jpg" />
            </v-container>
          </v-col>
        </v-row>
        
      </div>
      <div class="hidden-md-and-up">
        <v-row  class="pt-16">
          <p class="my-8">Hi, I'm Randall</p>
          <p class="pt-4">
            Aspiring Quant Developer/Software Engineer 
          </p>
          <h1 class="mb-4">Motivator . Leader . Professional</h1>
          
            <p class="website">
              Follow my journey as I explore more about Engineering in the Finance and Tech Industries
            </p>
          <NuxtLink to="/education"
            ><span id="link">Learn more about my journey</span></NuxtLink
          >
        </v-row>
        <v-row>
          <v-container>
            <img data-aos="zoom-in" src="/Profile-Picture.jpg" />
          </v-container>
        </v-row>
      </div><br>
      <hr>
      
      <hr>
      <br>
      <div  class="mt-5 ">
        <h1 class="text-center">My Education Journey</h1>
          <EducationDetails />
      </div>
      <br>
      <hr>
      <hr>
      <br>
      <div class="mt-5">
        <h1 class="text-center">My Journey as a professional</h1>
          <ExperienceDetails />
      </div>
    </v-container>
  </v-app>
</template>

<script>
import aosMixin from "~/mixins/aos";

export default {
  components: {},
  mixins: [aosMixin],
  data() {
    return {
      options: {
        paddingTop: "30px",
        sectionsColor: ["#f2f2f2", "#4BBFC3", "#7BAABE"],
      },
    };
  },
  /* destroyed() {
      $.fn.fullpage.destroy('all');
    } */
};
</script>

<style>
body{
  overflow-x: hidden;
}
.text {
  font-size: 30px;
}
img {
  max-width: 100%;
  height: auto;
}
p {
  font-size: 25px;
}
#link {
  font-size: 20px;
}
.website {
  font-size: 22px;
}
</style>
