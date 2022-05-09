<template>
  <v-col cols="12" sm="12" md="6" lg="6" xl="6">
    <v-card class="elevation-1 rounded-0 pb-4">
      <v-card-title>Members</v-card-title>
      <v-card-text class="pa-8">
        <v-data-table
          :headers="tableMembers.headers"
          :items="members"
          :search="search"
          :footer-props="{ itemsPerPageText: 'Rows per pages' }"
          :custom-filter="filterSearch"
          item-key="ssn"
          :items-per-page="10"
          color="ncBlueDarker1"
          :loading="tableMembers.loading"
        >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search by SSN"
              class="mx-4"
              prepend-icon="mdi-account-search"
              color="ncBlueDarker1"
            ></v-text-field>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "TableCustom",
  props: {
    members: {
      type: Array,
      required: true,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      search: "",
      tableMembers: {
        headers: [
          {
            text: "First Name",
            align: "start",
            value: "firstName",
          },
          { text: "Last Name", value: "lastName" },
          { text: "Address", value: "address" },
          { text: "SSN", value: "ssn" },
        ],
        loading: false,
        pagination: {
          sortBy: "firstName",
          descending: false,
        },
      },
    };
  },
  watch: {
    search(str) {
      this.search = str.toUpperCase();
    },
  },
  methods: {
    filterSearch(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
      );
    },
  },
};
</script>

<style></style>
