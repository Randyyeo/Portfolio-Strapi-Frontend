<template>
  <div>
    <v-container class="my-5">
      <v-row data-aos="flip-right" class="names" v-for="(detail, index) in details" :key="index">
        <v-col>
          <img :src="`${detail.logo[0].url}`" />
        </v-col>
        <v-col>
          <p>
            <b>Position</b> : {{ detail.role }} <br />
            <b>Company</b> : {{ detail.company }}
          </p>

          <v-btn @click="go(detail.id)">
            Show Details
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="details === null" class="delay text-center">
      <v-progress-circular
                indeterminate
                color="primary"
                :width="7"
                :size="70"
            ></v-progress-circular>
            <span style="display: block;" class="mt-3" >Please wait while we retrieve the information</span>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    details() {
      return this.$store.getters.experience;
    },
  },
  mounted() {
    this.$store
      .dispatch("getExperience", {})
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    go(id) {
      this.$store.commit("SET_ID", id);
      this.$router.push(`/experience/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 200px;
  width: 200px;
}
.names {
  text-align: center;
}
p {
  padding-top: 25px;
  font-size: 16px;
}
.delay {
 /*  width: 50%;
  margin: 4cm auto 0 auto;
  background-color: grey;
  border-radius: 12px;
  border: 2px solid white;
  #message {
    text-align: center;
    font-size: 25px;
    width: 80%;
    padding: 5% 0;
    margin: auto;
  } */
  margin: 4cm auto;
}
@media (max-width: 600px) {
        .delay{
            #message{
                font-size: 10px
            }
        }
    }
</style>
