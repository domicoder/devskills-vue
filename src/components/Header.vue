<template>
  <v-sheet>
    <v-card
      outlined
      class="elevation-0 rounded-0"
      style="border-bottom: 1px solid #ebebeb"
    >
      <v-container class="" width="100%">
        <v-app-bar
          dark
          dense
          height="90"
          color="white"
          class="white elevation-0"
        >
          <v-toolbar-title>
            <div class="d-flex align-center my-3">
              <router-link :to="{ name: 'Home' }">
                <v-img
                  alt="Logo"
                  class="shrink mr-2"
                  contain
                  :src="images.imgLogo"
                  transition="scale-transition"
                  width="50"
                />
              </router-link>
              <router-link
                :to="{ name: 'Home' }"
                v-slot="{ href, navigate }"
                custom
              >
                <v-btn
                  :href="href"
                  @click="navigate"
                  color="black--text  ml-4 white "
                  class="white justify-start hidden-sm-and-down elevation-0"
                >
                  Home
                </v-btn>
              </router-link>
              <router-link
                :to="{ name: 'About' }"
                v-slot="{ href, navigate }"
                custom
              >
                <v-btn
                  :href="href"
                  @click="navigate"
                  color="black--text  ml-4 white "
                  class="white justify-start hidden-sm-and-down elevation-0"
                >
                  About us
                </v-btn>
              </router-link>
            </div>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon color="black" class="hidden-sm-and-down">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon color="black" class="hidden-sm-and-down" href="#">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <router-link
            :to="{ name: 'Members' }"
            v-slot="{ href, navigate }"
            custom
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  color="black"
                  class="hidden-sm-and-down"
                  :href="href"
                  @click="navigate"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-account-plus</v-icon>
                </v-btn>
              </template>
              <span>Login to add new members</span>
            </v-tooltip>
          </router-link>
          <v-app-bar-nav-icon
            @click="$root.$emit('toggle-drawer')"
            class="hidden-md-and-up black"
          ></v-app-bar-nav-icon>
        </v-app-bar>
      </v-container>
    </v-card>
  </v-sheet>
</template>

<script>
import imgLogo from "@/assets/logo.png";
export default {
  name: "Header",
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
.border-bottom-1 {
  border-bottom: 2px solid red;
}
</style>
