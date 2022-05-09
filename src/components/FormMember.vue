<template>
  <v-col cols="12" sm="12" md="6" lg="6" xl="6">
    <v-card class="elevation-1 rounded-0 pb-4">
      <div class="pt-10" align="center">
        <v-lazy-image
          alt="Profile"
          class="shrink mr-2"
          contain
          :src="images.profile"
          transition="scale-transition"
          height="285"
        />
      </div>
      <v-card-title class="justify-center">Add a new member</v-card-title>
      <v-card-text class="pa-8">
        <form>
          <v-text-field
            v-model="member.firstName"
            :error-messages="firstNameErrors"
            label="First Name"
            placeholder="First Name"
            prepend-icon="mdi-account"
            required
            @input="$v.member.firstName.$touch()"
            @blur="$v.member.firstName.$touch()"
            color="ncBlueDarker1"
          ></v-text-field>
          <v-text-field
            v-model="member.lastName"
            :error-messages="lastNameErrors"
            label="Last Name"
            placeholder="Last Name"
            prepend-icon="mdi-account"
            required
            @input="$v.member.lastName.$touch()"
            @blur="$v.member.lastName.$touch()"
            color="ncBlueDarker1"
          ></v-text-field>
          <v-text-field
            v-model="member.address"
            :error-messages="addressErrors"
            label="Address"
            placeholder="Address"
            prepend-icon="mdi-map-marker-outline"
            required
            @input="$v.member.address.$touch()"
            @blur="$v.member.address.$touch()"
            color="ncBlueDarker1"
          ></v-text-field>
          <v-text-field
            v-model="member.ssn"
            :error-messages="ssnErrors"
            label="SSN"
            placeholder="SSN"
            v-mask="'###-##-####'"
            prepend-icon="mdi-file-document"
            required
            @input="$v.member.ssn.$touch()"
            @blur="$v.member.ssn.$touch()"
            color="ncBlueDarker1"
          ></v-text-field>
        </form>
      </v-card-text>
      <v-card-actions class="justify-center pa-8">
        <v-row no-gutters class="justify-center">
          <v-spacer v-if="!isMobileWatchingIt"></v-spacer>
          <v-col
            cols="10"
            sm="12"
            md="4"
            lg="4"
            xl="4"
            :class="`${isMobileWatchingIt ? 'pb-6' : ''}`"
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red white--text"
                  v-bind="attrs"
                  v-on="on"
                  class="elevation-0 border-radius-22"
                  @click.prevent="clearFields"
                  width="110px"
                  height="44px"
                  block
                >
                  <v-icon color="white">mdi-restart</v-icon>
                  Reset
                </v-btn>
              </template>
              <span>Reset</span>
            </v-tooltip>
          </v-col>
          <span v-if="!isMobileWatchingIt" class="mx-8"></span>
          <v-col cols="10" sm="12" md="4" lg="4" xl="4">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="green white--text"
                  v-bind="attrs"
                  v-on="on"
                  class="elevation-0 border-radius-22"
                  tile
                  :disabled="formNotValidated"
                  @click.prevent="addNewMember"
                  width="110px"
                  height="44px"
                  block
                >
                  <v-icon color="white">mdi-content-save</v-icon>
                  Save
                </v-btn>
              </template>
              <span>Save</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

import profileImg from "@/assets/profile.svg";

export default {
  name: "FormMember",
  mixins: [validationMixin],
  validations: {
    member: {
      firstName: { required, minLength: minLength(2) },
      lastName: { required, minLength: minLength(2) },
      address: { required, minLength: minLength(2) },
      ssn: { required, minLength: minLength(11), maxLength: maxLength(11) },
    },
  },
  data() {
    return {
      member: {
        firstName: null,
        lastName: null,
        address: null,
        ssn: null,
      },
      formNotValidated: true,
      images: {
        profile: profileImg,
      },
    };
  },
  watch: {
    firstNameErrors() {
      this.hasErrors();
    },
    lastNameErrors() {
      this.hasErrors();
    },
    addressErrors() {
      this.hasErrors();
    },
    ssnErrors() {
      this.hasErrors();
    },
  },
  computed: {
    firstNameErrors() {
      const errors = [];
      if (!this.$v.member.firstName.$dirty) return errors;
      !this.$v.member.firstName.required &&
        errors.push("First Name is required.");
      !this.$v.member.firstName.minLength &&
        errors.push(
          `First Name must have at least ${this.$v.member.firstName.$params.minLength.min} letters.`
        );
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.member.lastName.$dirty) return errors;
      !this.$v.member.lastName.required &&
        errors.push("Last Name is required.");
      !this.$v.member.lastName.minLength &&
        errors.push(
          `Last Name must have at least ${this.$v.member.lastName.$params.minLength.min} letters.`
        );
      return errors;
    },
    addressErrors() {
      const errors = [];
      if (!this.$v.member.address.$dirty) return errors;
      !this.$v.member.address.required && errors.push("Address is required.");
      !this.$v.member.address.minLength &&
        errors.push(
          `Address must have at least ${this.$v.member.address.$params.minLength.min} letters.`
        );
      return errors;
    },
    ssnErrors() {
      const errors = [];
      if (!this.$v.member.ssn.$dirty) return errors;
      !this.$v.member.ssn.required && errors.push("SSN is required.");
      !this.$v.member.ssn.minLength &&
        errors.push(
          `SSN must have ${
            this.$v.member.ssn.$params.minLength.min - 2
          } numbers.`
        );
      !this.$v.member.ssn.maxLength &&
        errors.push(
          `SSN must have ${
            this.$v.member.ssn.$params.maxLength.max - 2
          } numbers.`
        );
      return errors;
    },
  },
  methods: {
    hasErrors() {
      if (this.$v.$invalid) {
        this.formNotValidated = true;
      } else {
        this.formNotValidated = false;
      }
    },
    clearFields() {
      this.member.firstName = null;
      this.member.lastName = null;
      this.member.address = null;
      this.member.ssn = null;
    },
    resetAndClear() {
      this.$v.$reset();
      this.clearFields();
    },
    async addNewMember() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.formNotValidated = true;
        return;
      } else {
        let params = {
          firstName: this.capitalizeFirstLetter(this.member.firstName.trim()),
          lastName: this.capitalizeFirstLetter(this.member.lastName.trim()),
          address: this.member.address.trim(),
          ssn: this.member.ssn,
        };

        // * emit event to parent
        this.$emit("create-member", params);
      }
    },
  },
};
</script>

<style scoped></style>
