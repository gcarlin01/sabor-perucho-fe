import { createRouter, createWebHistory } from "vue-router";

// Import your views
import HomePage from "@/views/HomePage.vue";
import RecipePage from "@/views/RecipePage.vue";
import AboutPage from "@/views/AboutPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/recipe/:id",
    name: "Recipe",
    component: RecipePage,
    props: true, // Enables passing route params as props
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
