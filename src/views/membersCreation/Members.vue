<template>
  <v-card class="mx-auto pb-10 elevation-0 rounded-0" color="#cdccff">
    <div>
      <v-container fluid>
        <v-row dense>
          <FormMember v-on:create-member="addNewMember" />
          <TableCustom :members="allMembers" />
        </v-row>
      </v-container>
    </div>
  </v-card>
</template>

<script>
// @ is an alias to /src
import FormMember from "@/components/FormMember.vue";
import TableCustom from "@/components/TableCustom.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Members",
  components: { FormMember, TableCustom },
  data() {
    return {
      polling: null,
    };
  },
  async created() {
    await this.fetchAllMembers();
    this.pollAllMembers();
  },
  computed: {
    ...mapGetters({
      allMembers: "members/getAllMembers",
      allFetchingMembersErrors: "members/getFetchingMembersErrors",
    }),
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
  methods: {
    ...mapActions({
      fetchAllMembers: "members/fetchAllMembers",
      createMember: "members/createMember",
    }),
    async pollAllMembers() {
      this.polling = setInterval(async () => {
        await this.fetchAllMembers();
        this.validateStatusCodeResponse(
          this.allFetchingMembersErrors.statusCode
        );
      }, 120000);
    },
    async addNewMember(params) {
      this.$root.$emit("show-global-dialog", {
        title: "Loading...",
        type: "LOADING",
      });

      await this.createMember(params);

      this.$root.$emit("close-global-dialog");

      this.validateStatusCodeResponse(this.allFetchingMembersErrors.statusCode);
    },
    validateStatusCodeResponse(code) {
      if (code === 401) {
        this.$router.push("/login");
      } else if (code == 400 || (code >= 402 && code < 500)) {
        this.$root.$emit("show-global-dialog", {
          message: this.allFetchingMembersErrors.message,
          title: "Error",
          type: "ERROR",
        });
        this.$store.dispatch("members/cleanFetchingMembersErrors");
      } else if (code >= 200 && code < 300) {
        if (code == 201) {
          this.$root.$emit("show-global-dialog", {
            message: "Member created successfully.",
            title: "Success",
            type: "SUCCESS",
          });
          this.$store.dispatch("members/cleanFetchingMembersErrors");
        }
      }
    },
  },
};
</script>
