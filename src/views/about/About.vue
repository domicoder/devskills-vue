<template>
  <div
    :class="`text-center bg-custom-purple-1 ${
      isMobileWatchingIt ? 'pa-8' : 'pa-10'
    }`"
  >
    <h1 class="black--text display-3 font-weight-bold">About</h1>
    <h3 class="black--text display-1 font-weight-bold pt-12">
      devskills VUE - NewCombin form
    </h3>
    <p class="pb-8 font-weight-regular pt-10 text-h5">
      Landing Page <b>(VUE 2)</b> to add members with <b>Restify (API)</b>. Then
      show all members in a Data Table. Like this...
    </p>
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="6" xl="6">
        <v-lazy-image
          src="https://github.com/newcombin/devskills/raw/main/design.png"
          sizes="(max-width: 150px) 400px, 800px"
          srcset="
            https://github.com/newcombin/devskills/raw/main/design.png 800w,
            https://github.com/newcombin/devskills/raw/main/design.png 820w
          "
          alt="Mockup"
          width="800px"
          class="mx-2 ml-auto"
          :src-placeholder="images.placeholder"
          transition="scale-transition"
        />
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6" xl="6">
        <v-card class="elevation-0 rounded-0 mr-auto" color="#cdccff">
          <v-list
            :class="`wrap-text-next-line ${
              isMobileWatchingIt ? 'pa-4' : 'pa-10 '
            }`"
          >
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.header"
                :key="item.header"
                v-text="item.header"
                class="text-h4 font-weight-bold black--text mb-6"
              ></v-subheader>
              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item v-else :key="item.title">
                <v-list-item-icon
                  :class="`${isMobileWatchingIt ? 'mr-2' : 'mr-4'}`"
                >
                  <v-icon color="success">mdi-checkbox-marked-circle</v-icon>
                </v-list-item-icon>

                <v-list-item-content class="text-left">
                  <v-list-item-title
                    v-html="item.title"
                    class="text-h5 font-weight-bold"
                  ></v-list-item-title>
                  <p class="text-h6 text-justify" v-html="item.subtitle"></p>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import placeholderImg from "@/assets/placeholder-800x500.png";

export default {
  name: "About",
  data() {
    return {
      images: {
        placeholder: placeholderImg,
      },
      items: [
        { header: "Tasks" },
        {
          title: "Task 1",
          subtitle: `The form data must be sent to the API, the table on the right must receive the data from it when the site is loaded.`,
        },
        { divider: true, inset: true },
        {
          title: "Task 2",
          subtitle: `After each member creation successful, the data must be entered into the table, without to call a GET endpoint.`,
        },
        { divider: true, inset: true },
        {
          title: "Task 3",
          subtitle: "The reset button should clear the form fields.",
        },
        { divider: true, inset: true },
        {
          title: "Task 4",
          subtitle: "The save button should send the data to the API</span>",
        },
        { divider: true, inset: true },
        {
          title: "Task 5",
          subtitle:
            "The Social Security Number (SSN) is unique and cannot be repeated in the list.",
        },
        { divider: true, inset: true },
        {
          title: "Task 6",
          subtitle: "If an error occurs, report it (dialog).",
        },
        { divider: true, inset: true },
        {
          title: "Task 7",
          subtitle:
            "After 2 minutes of inactivity, Polling to call the request of all members and then reload the table automatically.",
        },
        { divider: true, inset: true },
        {
          title: "Task 8",
          subtitle:
            "First Name, Last Name y Address must have more than 1 character, without spaces to sides (trim).",
        },
        { divider: true, inset: true },
        {
          title: "Task 9",
          subtitle:
            "SSN: Must have the format ###-##-#### (each # is a number, the hyphens are required).",
        },
        { divider: true, inset: true },
        {
          title: "Task 10",
          subtitle: "Disable Save Button if the Text Fields have errors.",
        },
        { divider: true, inset: true },
        {
          title: "Task 11",
          subtitle: `Create a <span class="text-decoration-underline">README.md</span> file with the instruction to run this project.`,
        },
        { divider: true, inset: true },
        {
          title: "Task 12",
          subtitle: `Use <span class="text-decoration-underline">Authorization Bearer token</span> to create and get members.`,
        },
      ],
    };
  },
};
</script>

<style>
.cotainer-center {
  display: grid;
  place-items: center;
}
</style>
