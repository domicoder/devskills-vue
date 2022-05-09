<template>
  <v-container fluid  class="bg-custom-0 pa-0">
    <v-row no-gutters class="justify-center">
      <v-col cols="12" class="pa-0">
        <v-card class="elevation-0 rounded-0 ma-0 py-14" color="#cdccff">
          <v-row class="align-center justify-center">
            <v-col cols="12" sm="12" md="5" lg="5" xl="5" align="center">
              <div class="ma-10">
                <h1
                  :class="`
                    font-weight-bold wrap-text-next-line text-left mx-4 ${
                      isMobileWatchingIt ? 'display-1' : 'display-4'
                    }`"
                >
                  devskills VUE - NewCombin form
                </h1>
                <p class="font-weight-regular pt-10 text-h4 text-left  mx-4">
                  <b>Welcome!</b>
                </p>
                <p class="font-weight-regular pt-10 text-h5 text-left  mx-4">
                  Go to the top right corner to login and start interacting with
                  Members.
                </p>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" align="center">
              <v-lazy-image
                alt="Logo"
                class="shrink mr-2"
                contain
                :src="images.welcome"
                transition="scale-transition"
                :height="`${isMobileWatchingIt ? '366' : '700'}`"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import welcomeImg from "@/assets/welcome.svg";

export default {
  name: "WelcomeArticle",
  data() {
    return {
      images: {
        welcome: welcomeImg,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.bg-custom-0 {
  background-color: #f0f0fc;
}
</style>
