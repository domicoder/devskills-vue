<template>
  <v-row justify="center" v-if="loadingBody.visibility">
    <v-dialog v-model="loadingBody.visibility" width="500px" persistent>
      <v-card tile class="pa-4" elevation="0">
        <v-card-text class="text-center mt-8">
          <div v-if="loadingType === 'ERROR'">
            <lottie-error
              :options="animationsOptions.iconError"
              :height="150"
              :width="150"
              v-on:animCreated="handleAnimation"
            />
          </div>
          <div v-if="loadingType === 'SUCCESS'">
            <lottie-success
              :options="animationsOptions.iconSuccess"
              :height="150"
              :width="150"
              v-on:animCreated="handleAnimation"
            />
          </div>
          <div v-if="loadingType === 'LOADING'">
            <lottie-loading
              :options="animationsOptions.iconLoading"
              :height="150"
              :width="150"
              v-on:animCreated="handleAnimation"
            />
          </div>
        </v-card-text>
        <v-card-title class="justify-center">
          <span class="text-h5 black--text darken-4 font-weight-black">{{
            loadingBody.title
          }}</span>
        </v-card-title>
        <v-card-title
          class="justify-center wrap-text-next-line"
          v-if="loadingBody.message"
        >
          <p class="black--text darken-5">{{ loadingBody.message }}</p>
        </v-card-title>
        <v-card-actions class="my-4">
          <v-spacer></v-spacer>
          <v-btn
            color="ncBlueDarker1 white--text"
            class="elevation-0 border-radius-20"
            tile
            @click.prevent="closeDialog"
            width="130px"
            outlined
          >
            <v-icon color="ncBlueDarker1">mdi-close</v-icon>
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import LottieLoading from "vue-lottie";
import LottieError from "vue-lottie";
import LottieSuccess from "vue-lottie";
import loadingImg from "@/assets/loading.gif";
import errorImg from "@/assets/error.gif";
import animationSuccessImg from "@/assets/animations/success.json";
import animationErrorImg from "@/assets/animations/error.json";
import animationLottieLoadingImg from "@/assets/animations/loading.json";

export default {
  name: "Loading",
  components: {
    "lottie-loading": LottieLoading,
    "lottie-error": LottieError,
    "lottie-success": LottieSuccess,
  },
  data() {
    return {
      loadingBody: {
        visibility: false,
        title: "",
        message: "",
        vertical: true,
        icon: "mdi-information",
        type: "DEFAULT",
      },
      images: {
        loading: loadingImg,
        error: errorImg,
      },
      loadingType: "DEFAULT",
      animationsOptions: {
        iconSuccess: {
          animationData: animationSuccessImg,
        },
        iconError: {
          animationData: animationErrorImg,
        },
        iconLoading: {
          animationData: animationLottieLoadingImg,
        },
      },
    };
  },
  watch: {
    loadingBody: {
      deep: true,
      handler(newLoadingBody) {
        this.loadingType = newLoadingBody.type;
      },
    },
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    handleAnimation1: function (anim) {
      this.anim = anim;
    },
    handleAnimation2: function (anim) {
      this.anim = anim;
    },
    stop: function () {
      this.anim.stop();
    },
    play: function () {
      this.anim.play();
    },
    openDialog(value) {
      this.loadingBody.visibility = value;
    },
    closeDialog() {
      this.loadingBody = {
        visibility: false,
        title: "",
        message: "",
        vertical: true,
        icon: "mdi-information",
        type: "DEFAULT",
      };
      this.openDialog(false);
    },
  },
  mounted() {
    this.$root.$on("show-global-dialog", (loadingBody) => {
      this.loadingBody.message = loadingBody.message || "";
      this.loadingBody.title = loadingBody.title || "Loading...";
      this.loadingBody.type = loadingBody.type || "DEFAULT";
      this.openDialog(true);
    });
    this.$root.$on("close-global-dialog", () => {
      this.closeDialog();
    });
  },
};
</script>

<style></style>
