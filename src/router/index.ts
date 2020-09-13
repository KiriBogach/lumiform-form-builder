import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import FormBuilder from "../views/FormBuilder.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "FormBuilder",
    component: FormBuilder
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
