import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import CartView from "../views/order/CartView.vue";
import ContactView from "../views/ContactView.vue"
import ErrorView from "../views/ErrorView.vue";

import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import UserView from "../views/users/UserView.vue";
import DetailView from "../views/users/DetailView.vue";

import ProductView from "../views/products/ProductView.vue";
import ProductAdd from "../views/products/ProductAdd.vue";
import ProductDetail from "../views/products/ProductDetail.vue";

import CategoryAdd from "../views/categorys/CategoryAdd.vue";
import CategoryView from "../views/categorys/CategoryView.vue";

import NewsView from "../views/news/NewsView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: "/signin",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/error",
    name: "error",
    component: ErrorView,
  },
  {
    path: "/users",
    name: "users",
    component: UserView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductView,
  },
  {
    path: "/products/add",
    name: "ProductAdd",
    component: ProductAdd,
  },
  {
    path: "/products/:slug/:productID",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/categories",
    name: "categories",
    component: CategoryView,
  },
  {
    path: "/categories/add",
    name: "CategoryAdd",
    component: CategoryAdd,
  },
  {
    path: "/users/:userID",
    name: "user-detail",
    component: DetailView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
