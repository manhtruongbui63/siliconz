import Vue from "vue";
import Vuex from "vuex";
import UserService from "../apis/models/user";
import CategoryService from "../apis/models/category";
import ProductService from "../apis/models/product";
import OrderService from "../apis/models/order";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    categories: [],
    products: [],
    carts: [],
    brands: [
      {
        _id: 0,
        name: "Keychron",
      },
      {
        _id: 1,
        name: "Edra",
      },
      {
        _id: 2,
        name: "Akko",
      },
    ],
    colors: [
      {
        _id: 0,
        name: "While",
      },
      {
        _id: 1,
        name: "Gray",
      },
      {
        _id: 2,
        name: "Black",
      },
    ],
    categoryBanner: [
      {
        id: 0,
        categoryName: "Ghế công thái học",
        photoUrl:
          "https://bucket.nhanh.vn/store1/51905/bn/ESE_Banner_570x650.png",
      },
      {
        id: 1,
        categoryName: "Keychron Wireless",
        photoUrl:
          "https://bucket.nhanh.vn/store1/51905/bn/SliconZShop_Banner_570x650_1.png",
      },
      {
        id: 3,
        categoryName: "Keychron Custom",
        photoUrl:
          "https://bucket.nhanh.vn/store1/51905/bn/SliconZShop_Banner_570x650_2.png",
      },
    ],
    filterProduct: [
      { id: 1, name: "Truong" },
      { id: 2, name: "Luong" },
    ],
    sliders: [
      {
        nameImage: "s-banner-1",
      },
      {
        nameImage: "s-banner-2",
      },
      {
        nameImage: "s-banner-3",
      },
    ],
    news: [
      {
        id: 0,
        title: "Title 1",
        description: "Description 1",
        conten: "Content 1",
      },
      {
        id: 1,
        title: "Title 2",
        description: "Description 2",
        conten: "Content 2",
      },
      {
        id: 2,
        title: "Title 3",
        description: "Description 3",
        conten: "Content 3",
      },
      {
        id: 3,
        title: "Title 4",
        description: "Description 4",
        conten: "Content 4",
      },
      {
        id: 4,
        title: "Title 5",
        description: "Description 5",
        conten: "Content 5",
      },
    ],
    user: null,
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    token: localStorage.getItem("token") || "",
  },
  getters: {
    //user
    getAllUser(state) {
      return state.users;
    },
    getProductSale(state) {
      return state.products.filter((p) => p.productDiscount > 0).slice(0, 4);
    },
  },
  mutations: {
    auth_success(state, payload) {
      state.token = payload;
    },
    //user
    setUser(state, payload) {
      state.user = payload;
    },
    setProfileUser(state, payload) {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.username =
        payload.firstName.match(/\S/g).join("") +
        payload.lastName.match(/\S/g).join("");
    },
    setCart(state, payload) {
      state.carts = payload;
    },

    // category
    createCategory() {},
    createProduct() {},

    getProduct() {},
  },
  actions: {
    async getCurrentUser({ commit }) {
      try {
        const user = await UserService.secret();
        commit("setUser", user.data.user);
        commit("setProfileUser", user.data.user);
      } catch (error) {
        console.log(error);
      }
    },

    async getCart({ commit }) {
      try {
        console.log("store cart");
        const cart = await OrderService.getAllCart();
        console.log(cart.data.data);
        commit("setCart", cart.data.data);
      } catch (error) {
        console.log(error);
      }
    },

    async login({ commit }, datas) {
      try {
        const result = await UserService.login(datas);
        localStorage.setItem("token", result.data.token);
        commit("setUser", result.data.user);
        return result;
      } catch (error) {
        const err = error.response.data.error;
        return err;
      }
    },

    logout() {
      localStorage.removeItem("token");
    },

    async register({ commit }, data) {
      try {
        const result = await UserService.register(data);
        console.log(result);
        localStorage.setItem("token", result.data.token);
        commit("setUser", result.data.user);
        return result;
      } catch (error) {
        return error.response.data;
      }
    },
    // user
    async getAllUser({ state }) {
      try {
        const result = await UserService.getAll();
        state.users = result.data.users;
      } catch (error) {
        console.log(error);
      }
    },

    // category
    async getAllCategory({ state }) {
      try {
        const result = await CategoryService.getAll();
        state.categories = result.data.categories;
      } catch (error) {
        console.log(error);
      }
    },

    async createCategory({ commit }, data) {
      try {
        await CategoryService.postCreate(data);
        commit("createCategory");
      } catch (error) {
        console.log(error);
      }
    },

    // product
    async getAllProduct({ state }) {
      try {
        const result = await ProductService.getAll();
        state.products = result.data.products;
      } catch (error) {
        console.log(error);
      }
    },

    async createProduct({ commit }, formData) {
      try {
        await ProductService.postCreate(formData);
        console.log(formData);
        commit("createProduct");
      } catch (error) {
        console.log(error);
      }
    },
    async getProductDetail({ commit }, payload) {
      try {
        const res = await ProductService.getProduct(payload);
        commit("getProduct");
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addCart({ commit }, data) {
      try {
        const res = await OrderService.addCart(data);
        commit("");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
