<template>
  <div>
    <v-container class="my-12">
      <v-row class="names" v-for="(detail, index) in details" :key="index">
        <v-col>
          <img :src="`${detail.logo[0].url}`" />
        </v-col>
        <v-col>
          <p>
            <u>Position</u> : {{ detail.role }} <br />
            <u>Company</u> : {{ detail.company }}
          </p>

          <v-btn @click="go(detail.id)">
            Show Details
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="details === null" class="delay">
      <p id="message">
        Sorry for the delay! All the information is hosted on a free server
        which takes sometime to boot up. You can refresh a few more times and
        wait 1-2mins for it to show.
      </p>
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
  width: auto;
}
.names {
  text-align: center;
}
p {
  padding-top: 25px;
  font-size: 16px;
}
.delay {
  width: 50%;
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
  }
}
</style>
