import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Select from "./components/select.vue"
import countDown from "./components/countDown.vue"
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    {
      path: "/select",
      name: "select",
      component: Select
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/countDown",
      component: countDown
    }
  ]
});
