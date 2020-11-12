import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login";
import register from "../views/register";
import home from "../views/home";
import admin from "../views/admin"

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
        component: home,
        meta: {
          auth: true
        }
      },
      {
        path: "/admin",
        name: "admin",
        component: admin,
        meta: {
          auth: true
        }
      },
      {
        path: '*',
        name: 'catchAll',
        component: login
     }
];

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes
  });

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (localStorage.getItem("jwt") == null ) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;