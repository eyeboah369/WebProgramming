import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login";
import register from "../views/register";
import home from "../views/home";

Vue.use(VueRouter);
const routes = [
      {
        path: "/",
        name: "login",
        component: login
      },
      {
        path: "/login",
        name: "login",
        component: login
      },
      {
        path: "/register",
        name: "register",
        component: register
      },
      {
        path: "/home",
        name: "home",
        component: home
      },
];

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes
  });
export default router;