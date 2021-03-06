import { createRouter, createWebHashHistory } from "vue-router";
import Welcome from "../components/Welcome.vue";
import TipsNTricks from "../components/TipsNTricks.vue";

const routes = [

  {
    path: "/tipsNTricks",
    name: "TipsNTricks",
    component: TipsNTricks,
  },
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
