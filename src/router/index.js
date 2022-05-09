import Vue from "vue";
import VueRouter from "vue-router";
import Store from "@/store/index";

import Home from "../views/home/Home.vue";
import About from "../views/about/About.vue";
import Login from "../views/login/Login.vue";
import Members from "../views/membersCreation/Members.vue";
import NotFound from "../views/notFound/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/page-not-found",
  },
  {
    path: "/page-not-found",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/members",
    name: "Members",
    component: Members,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresNotLoggedIn: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresNotLoggedIn = to.matched.some(
    (record) => record.meta.requiresNotLoggedIn
  );

  let tokenExpired = true;
  const authLS = localStorage.getItem("auth");
  let auth;
  if (authLS) {
    auth = JSON.parse(authLS);
  }
 
  if (auth) {
    if (auth.accessToken && auth.issuedAt && auth.expiresAt) {
      let expiresAt = auth.expiresAt;
      tokenExpired = expiresAt < new Date().getTime() / 1000;
      if (tokenExpired) {
        if (Store.getters["auth/getAuth"].isLoggedIn) {
          Store.dispatch("auth/logout");
          Store.dispatch("members/cleanFetchingMembersErrors");
        }
      }
    }
  }

  if (requiresAuth && tokenExpired && !requiresNotLoggedIn) {
    next({ name: "Login" });
  } else if (requiresAuth && !tokenExpired) {
    Store.dispatch("members/cleanFetchingMembersErrors");
    next();
  } else {
    if (!requiresAuth && !tokenExpired && to.name == "Login") {
      next({ name: "Home" });
    } else {
      next();
    }
  }
});

export default router;
