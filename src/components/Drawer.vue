<template>
  <v-navigation-drawer
    v-model="visibility"
    stateless
    :value="visibility"
    v-if="visibility"
    right
    absolute
    temporary
    color="black"
    v-click-outside="toggleDrawer"
  >
    <v-list nav dense>
      <v-list-item :to="{ name: 'Home' }" class="mt-3" @click="toggleDrawer">
        <v-btn color="white--text justify-start" class="black" block>
          <v-icon class="mr-2">mdi-home</v-icon>
          Inicio
        </v-btn>
      </v-list-item>
      <v-list-item :to="{ name: 'About' }" @click="toggleDrawer">
        <v-btn color="white--text justify-start" class="black" block>
          <v-icon class="mr-2">mdi-web</v-icon>
          Acerca de
        </v-btn>
      </v-list-item>
    </v-list>
    <v-divider color="white"></v-divider>
    <v-list nav dense>
      <v-list-item href="#" @click="toggleDrawer">
        <v-btn color="white--text justify-start" class="black" block>
          <v-icon class="mr-2">mdi-facebook</v-icon>
          Facebook
        </v-btn>
      </v-list-item>
      <v-list-item href="#" @click="toggleDrawer">
        <v-btn color="white--text justify-start" class="black" block>
          <v-icon class="mr-2">mdi-instagram</v-icon>
          Instagram
        </v-btn>
      </v-list-item>
      <v-list-item :to="{ name: 'Members' }" @click="toggleDrawer">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="white--text justify-start"
              class="black"
              v-bind="attrs"
              v-on="on"
              block
            >
              <v-icon class="mr-2">mdi-account-plus</v-icon>
              Login
            </v-btn>
          </template>
          <span>Login to add new members</span>
        </v-tooltip>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",
  data() {
    return {
      visibility: null,
    };
  },
  mounted() {
    this.$root.$on("toggle-drawer", () => {
      this.toggleDrawer();
    });
  },
  methods: {
    toggleDrawer() {
      this.visibility = !this.visibility;
    },
  },
};
</script>

<style></style>
