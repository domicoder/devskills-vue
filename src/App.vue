<template>
  <v-app>
    <Drawer />
    <Header />
    <v-main class="bg-custom-purple-1" color>
      <router-view />
    </v-main>
    <Footer />
    <SnackbarToast />
    <Loading />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Drawer from "@/components/Drawer.vue";
import Footer from "@/components/Footer.vue";
import SnackbarToast from "@/components/snackbarGlobal/SnackbarToast.vue";
import Loading from "./components/loading/Loading.vue";

export default {
  name: "App",
  components: {
    Header,
    Drawer,
    Footer,
    SnackbarToast,
    Loading,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.border-radius {
  &-8 {
    border-radius: 8px;
  }
  &-10 {
    border-radius: 10px;
  }
  &-12 {
    border-radius: 12px;
  }
  &-14 {
    border-radius: 14px;
  }
  &-16 {
    border-radius: 16px;
  }
  &-18 {
    border-radius: 18px;
  }
  &-20 {
    border-radius: 20px;
  }
  &-22 {
    border-radius: 22px;
  }
}
.wrap-text-next-line {
  word-break: break-word;
}
.custom-purple-1 {
  color: #cdccff;
}
.bg-custom-purple-1 {
  background-color: #cdccff;
  border-color: #cdccff;
}
.bg-custom-0 {
  background-color: #f0f0fc;
}
.v-lazy-image {
  display: block;
  width: auto;
  max-width: 100%;
}
.cursor-p {
  cursor: pointer;
  &__hover {
    &-sm,
    &-md {
      color: #4055f2;
      padding-bottom: 0.25em;
      text-decoration: none;
      border-bottom: 1px solid #4055f2;
    }
    &-sm:hover {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%234055f2' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
      background-position: bottom;
      background-repeat: repeat-x;
      background-size: 7%;
      border-bottom: 0;
      padding-bottom: 0.3em;
      text-decoration: none;
      cursor: pointer;
    }
    &-md:hover {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%234055f2' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
      background-position: bottom;
      background-repeat: repeat-x;
      background-size: 15%;
      border-bottom: 0;
      padding-bottom: 0.3em;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
