<template>
  <v-card class="mx-auto elevation-0 rounded-0">
    <div>
      <WelcomeArticle />
    </div>
  </v-card>
</template>

<script>
// @ is an alias to /src
import WelcomeArticle from "@/components/WelcomeArticle.vue";

export default {
  name: "Home",
  components: { WelcomeArticle },
};
</script>
