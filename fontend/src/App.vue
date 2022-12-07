<template>
  <div id="app">
    <header-view />
    <router-view />
    <footer-view />
  </div>
</template>
<script>
import HeaderView from "./components/HeaderView.vue";
import FooterView from "./components/FooterView.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    HeaderView,
    FooterView,
  },
  created() {
    this.$store.dispatch("getAllUser");
    this.$store.dispatch("getAllCategory");
    this.$store.dispatch("getAllProduct");
    this.checkUser();
  },
  methods: {
    checkUser() {
      if (localStorage.getItem("token")) {
        this.$store.dispatch("getCurrentUser");
        this.$store.dispatch("getCart")
      }
    },
  },
  watch: {
    check() {
      this.checkUser;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}
a {
  color: #000;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #000;
    text-decoration: none;
  }
}
</style>
