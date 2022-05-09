<template>
  <v-container fluid class="pa-0 bg-custom-0">
    <v-row>
      <v-col cols="12" sm="12" md="5" lg="5" xl="5" class="pa-0">
        <v-card
          :class="`elevation-0 rounded-0 mx-0 ${
            isMobileWatchingIt ? 'py-8' : 'py-16'
          }`"
          color="bg-custom-0"
          :style="checkIsMobileToSetupImage"
        >
          <v-card
            :class="`elevation-14 rounded-8 ${
              isMobileWatchingIt ? 'mx-10 py-10 px-2' : 'mx-16 py-14 px-10'
            }`"
          >
            <div class="text-center pb-6">
              <span class="text-h5 black--text darken-4 font-weight-black"
                >LOGIN</span
              >
            </div>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="username"
                  :error-messages="usernameErrors"
                  @input="$v.username.$reset()"
                  @blur="$v.username.$touch()"
                  prepend-icon="mdi-account"
                  label="Type your username"
                  placeholder="sebas"
                  name="username"
                  type="text"
                  color="ncBlueDarker1"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :error-messages="passwordErrors"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  @input="$v.password.$reset()"
                  @blur="$v.password.$touch()"
                  prepend-icon="mdi-lock"
                  label="Password"
                  placeholder="*********"
                  name="password"
                  color="ncBlueDarker1"
                  :type="showPassword ? 'text' : 'password'"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="ncBlueDarker1 black--text"
                class="elevation-0 border-radius-20"
                tile
                @click="signIn"
                :width="isMobileWatchingIt ? '180' : '228px'"
                outlined
              >
                Login
              </v-btn>
            </v-card-actions>
            <v-card-actions align="end" class="justify-end">
              <div class="my-4">
                <span
                  @click="$router.push({ name: 'Home' })"
                  class="cursor-p__hover-sm font-weight-bold"
                  color="ncBlueDarker1"
                  >{{ textDontHaveAnAccount + " " + textSingUp }}</span
                >
              </div>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="7" lg="7" xl="7" class="pa-0">
        <v-card
          class="elevation-0 rounded-0 ma-0 py-14"
          color="#cdccff"
          :style="checkIsMobileToSetupImage"
        >
          <v-card-text align="center">
            <v-lazy-image
              alt="Logo"
              class="shrink mr-2"
              contain
              :src="images.login"
              transition="scale-transition"
              height="500"
              py-auto
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

import loginGif from "@/assets/login.svg";

export default {
  name: "Login",
  mixins: [validationMixin],
  validations: {
    username: { required },
    password: { required },
  },
  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
      isLoggedIn: false,
      images: {
        login: loginGif,
      },
    };
  },
  created() {
    let auth = JSON.parse(localStorage.getItem("auth"));
    if (auth) {
      this.isLoggedIn = auth.isLoggedIn;
    } else {
      this.isLoggedIn = false;
    }

    if (!this.isLoggedIn && auth) {
      const params = {
        message: this.staticTexts.sessionHasExpired,
        title: "Error",
        type: "ERROR",
      };
      this.$root.$emit("show-global-dialog", params);
    }
  },
  computed: {
    ...mapGetters({
      user: "auth/getAuth",
      authErrors: "auth/getAuthErrors",
    }),
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push("Username is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Passowrd is required.");
      return errors;
    },
    checkIsMobileToSetupImage() {
      if (
        (!this.isMobileWatchingIt && innerHeight >= 940) ||
        (!this.isMobileWatchingIt && innerWidth < 648)
      ) {
        return "height: 100vh;";
      } else {
        return "";
      }
    },
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    async signIn() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        this.$root.$emit("show-global-dialog", {
          title: "Loading...",
          type: "LOADING",
        });

        await this.login({ username: this.username, password: this.password });

        this.$root.$emit("close-global-dialog");

        if (this.user.isLoggedIn) {
          this.$v.$reset();
          this.username = null;
          this.password = null;
          this.$router.push("/members");
        } else {
          this.$root.$emit("show-global-dialog", {
            message: this.authErrors.message,
            title: "Error",
            type: "ERROR",
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-custom-0 {
  background-color: #eaeaff;
}
.nc-blue-darker-1 {
  color: #4055f2;
}
</style>
