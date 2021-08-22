<template>
  <div class="mt-6">
    <MyProjects :data="projects" v-if="projects !== null" />
    <v-container v-if="projects === null" class="delay">
      <p id="message">
        Sorry for the delay! All the information is hosted on a free server
        which takes sometime to boot up. You can refresh a few more times and
        wait 1-2mins for it to show.
      </p>
    </v-container>
  </div>
</template>

<script>
import * as _ from "lodash";
export default {
  data() {
    return {
      projects: null,
    };
  },
  props: {
    data: null,
  },
  mounted() {
    this.get_projects();
  },
  methods: {
    async get_projects() {
      await this.$store
        .dispatch("getProjects")
        .then((res) => {
          let data = res.data.slice();
          this.projects = data
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
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
