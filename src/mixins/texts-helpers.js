const capitalizeFirstLetter = {
  data() {
    return {
      staticTexts: {
        dontHaveAnAccount: "Don't have an account?",
        singUp: "Sing up!",
        sessionHasExpired:
          "Your session has expired, please login again to continue accessing the services.",
      },
    };
  },
  methods: {
    capitalizeFirstLetter: (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
  computed: {
    textDontHaveAnAccount() {
      return this.capitalizeFirstLetter(this.staticTexts.dontHaveAnAccount);
    },
    textSingUp() {
      return this.capitalizeFirstLetter(this.staticTexts.singUp);
    },
  },
};

export { capitalizeFirstLetter };
