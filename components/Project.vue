<template>
  <div class="two-container">
    <div class="box">
      <h1>{{ data[0].name }}</h1>
      <p>{{ data[0].description }}</p>

      <div class="sub-box">
        <ul class="list">
          <li v-for="(language, index) in data[0].languages" :key="index">
            {{ language.language }}
          </li>
        </ul>

        <div v-if="data[0].frontend" class="mt-6">
          <v-btn @click="open(data[0].frontend)">Open</v-btn>
        </div>
        <!-- <v-btn v-else class='mt-6' @click="data[0].dialog = !data[0].dialog">Open</v-btn> -->
        <div v-else>
          <v-dialog v-model="data[0].dialog" width="500" :retain-focus="false">
            <template v-slot:activator="{ on }">
              <v-btn dark class="mt-6" v-on="on"> Open </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h5 grey">
                No Link Provided Yet
              </v-card-title>
              <v-card-text>
                Project is not done yet. Coming soon...
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="data[0].dialog = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </div>
    <div class="box">
      <h1>{{ data[1].name }}</h1>
      <p>{{ data[1].description }}</p>
      <div class="sub-box">
        <ul class="list">
          <li v-for="(language, index) in data[1].languages" :key="index">
            {{ language.language }}
          </li>
        </ul>
        <div v-if="data[1].frontend" class="mt-6">
          <v-btn @click="open(data[1].frontend)">Open</v-btn>
        </div>
        <!-- <v-btn v-else class='mt-6'>Open</v-btn> -->
        <div v-else>
          <v-dialog v-model="data[1].dialog" width="500" :retain-focus="false">
            <template v-slot:activator="{ on }">
              <v-btn dark class="mt-6" v-on="on"> Open </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h5 grey">
                No Link Provided Yet
              </v-card-title>
              <v-card-text class="text mt-12">
                Project is not done yet. Coming soon...
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="data[1].dialog = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: null,
  },
  methods: {
    open(link) {
      window.open(link);
    },
  },
};
</script>

<style lang="scss" scoped>
.two-container {
  display: flex;
  margin: 100px 10em 5em 10em;
  width: auto;
}
.box {
  width: 50%;
  height: 450px;
  border: 2px solid white;
  text-align: center;
  border-radius: 25px;
  margin: 15px;
  padding: 50px 15px;
  background-color: rgb(128, 128, 128);
  position: relative;
}
.list {
  margin: auto;
}
.sub-box {
  padding-bottom: 15px;
  position: absolute;
  bottom: 0px;
  border-radius: red;
  /* padding-left: 275px */
  right: 0px;
  left: 0px;
}
.text {
  text-align: center;
  font-size: 18px;
}
p {
  font-size: 16px;
}
</style>