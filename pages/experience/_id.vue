<template>
  <v-app>
    <div>
      <v-container class="my-14">
        <ExperienceDesc />
      </v-container>
    </div>
  </v-app>
</template>

<script>
import aosMixin from "~/mixins/aos";
export default {
  mixins:[aosMixin],
  data() {
    return {
      /* details: this.$store.state.experience,
                detail: null */
    };
  },

  /* mounted(){
            
            const id = this.$route.params.id
            this.detail = this.details.find(v => v.id == id)

                
            
        }, */
  /* computed: {
            detail(){
                const id = this.$route.params.id
                this.$store.dispatch("getExperience").then(res => {
                    let data = res.data 
                    console.log(data)
                    return data[id-1]
                    
                })
            }
        } */
};
</script>

<style lang="scss" scoped>
body{
  overflow-x: hidden;
}</style>
