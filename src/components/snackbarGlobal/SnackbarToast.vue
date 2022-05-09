<template>
  <v-card tile elevation="0" width="400px">
    <v-snackbar
      class="white--text"
      color="#b7301b"
      :timeout="snackbar.timeout"
      v-model="snackbar.visibility"
      :vertical="snackbar.vertical"
      elevation="24"
    >
      <v-icon>{{ snackbar.icon }}</v-icon>
      <span
        class="ml-2 white--text"
        style="font-size: 18px; font-weight: bold"
        >{{ snackbar.message }}</span
      >
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white--text"
          text
          v-bind="attrs"
          @click.native="closeSnackbar"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  name: "SnackbarToast",
  data: () => ({
    snackbar: {
      visibility: false,
      message: "",
      timeout: 4000,
      vertical: true,
      icon: "mdi-information",
    },
  }),
  mounted() {
    this.$root.$on("show-snackbar", (message) => {
      this.snackbar.visibility = true;
      this.snackbar.message = message;
    });
  },
  methods: {
    showSnackbar(data) {
      this.snackbar.visible = data.visible || false;
      this.snackbar.message = data.message || "Loading...";
    },
    closeSnackbar() {
      this.snackbar.visibility = false;
    },
  },
};
</script>

<style></style>
