import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#2196f3",
        secondary: "#03a9f4",
        accent: "#e91e63",
        error: "#f44336",
        warning: "#ffc107",
        info: "#00bcd4",
        success: "#4caf50",
        ncBlueDarker1: "#4055f2",
      },
    },
  },
  icons: {
    iconfont: "mdi",
  },
});
