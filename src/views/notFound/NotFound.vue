<template>
  <v-container fluid class="bg-custom-0 pa-0">
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="pa-0">
        <v-card
          class="elevation-0 rounded-0 pa-16 py-14 text-center"
          color="#cdccff"
        >
          <v-row class="pb-16">
            <v-col cols="12">
              <h1 class="black--text display-3 font-weight-bold mt-16">
                Page Not Found!
              </h1>
              <p class="font-weight-regular pt-10 text-h5"><b>Ooops!</b></p>
              <p class="font-weight-regular text-h5 ma-0">
                That page doesn't exist or is unavailable.
                <span
                  @click="$router.go(-1)"
                  class="cursor-p__hover-md"
                  color="ncBlueDarker1"
                  >Go back</span
                >
              </p>
              <v-col cols="12" align="center">
                <v-lazy-image
                  :src="images.notFound"
                  sizes="(max-width: 150px) 200px, 300px"
                  :srcset="`
                    ${images.notFound} 300w,
                    ${images.notFound} 320w
                  `"
                  alt="Not found"
                  width="300px"
                  :style="`${!isMobileWatchingIt ? 'max-width: 38%' : ''}`"
                  transition="scale-transition"
                />
              </v-col>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import notFoundImg from "@/assets/404.svg";

export default {
  name: "NotFound",
  data() {
    return {
      images: {
        notFound: notFoundImg,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.cotainer-center {
  display: grid;
  place-items: center;
}
</style>
