<template>
  <div class="bg-footer pb-4">
    <v-container fluid>
      <v-row
        no-gutters
        align="center"
        class="justify-center mx-8 pt-4 mt-5 ml-0"
      >
        <v-col class="text-left ml-0" cols="10" sm="12" md="4" lg="4" xl="4">
          <div class="mx-8">
            <h3
              :class="`font-weight-bold white--text pt-8 headline ${
                isMobileWatchingIt || (innerWidth >= 588 && innerWidth <= 972)
                  ? 'text-center'
                  : 'text-left'
              }`"
            >
              Copyright
            </h3>

            <p
              :class="`white--text pt-3 ${
                isMobileWatchingIt || (innerWidth >= 588 && innerWidth <= 972)
                  ? 'text-center'
                  : 'text-left'
              }`"
            >
              © 2022 devskills VUE - NewCombin form. All Rights Reserved.
            </p>
          </div>
        </v-col>
        <v-col
          class="text-center pt-2 pb-2"
          cols="10"
          sm="12"
          md="3"
          lg="3"
          xl="4"
        >
          <h3 class="white--text mb-4 headline font-weight-bold text-center">
            Social Media
          </h3>
          <v-btn text color="white justify-start" href="#">
            <v-icon class="mr-2 white--text">mdi-facebook</v-icon>
            Facebook
          </v-btn>
          <v-btn text color="white justify-start" href="#">
            <v-icon class="mr-2 white--text">mdi-instagram</v-icon>
            Instagram
          </v-btn>
        </v-col>
        <v-col class="text-left ml-0" cols="10" sm="12" md="4" lg="4" xl="4">
          <div class="">
            <h3
              :class="`white--text headline font-weight-bold mb-4 ${
                isMobileWatchingIt || (innerWidth >= 588 && innerWidth <= 972)
                  ? 'text-center'
                  : 'text-right'
              }`"
            >
              From
            </h3>
            <p
              :class="`white--text ${
                isMobileWatchingIt || (innerWidth >= 588 && innerWidth <= 972)
                  ? 'text-center'
                  : 'text-right'
              }`"
            >
              Made with <v-icon color="red">mdi-heart</v-icon> in Dominican
              Republic
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import imgLogo from "@/assets/logo.png";

export default {
  name: "Footer",
  data() {
    return {
      images: {
        imgLogo: imgLogo,
      },
    };
  },
};
</script>

<style scoped>
.bg-footer {
  background-color: #282c36;
}
</style>
