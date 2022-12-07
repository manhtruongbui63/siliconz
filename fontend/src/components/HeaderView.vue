<template>
  <div id="header">
    <div class="topbar container">
      <div class="left">
        <p class="top-title">
          Hotline:
          <span class="phone-number">19008198</span>
        </p>
      </div>
      <div class="right">
        <form class="form-search right-item">
          <input type="search" placeholder="Tìm kiếm sản phẩm..." />
          <f-icon class="search icon" icon="fa-magnifying-glass" />
        </form>
        <div class="form-action right-item">
          <router-link v-if="!user" class="login" :to="{ name: 'login' }">
            <f-icon class="icon" icon="fa-user" />
            Đăng nhập
          </router-link>
          <router-link class="cart" :to="{ name: 'cart' }">
            <f-icon class="icon" icon="fa-cart-shopping" />
          </router-link>
        </div>
        <div v-if="user" class="account" @click="toggleM">
          <span
            ><f-icon class="icon" icon="fa-user-astronaut" />
            {{ this.$store.state.username }}</span
          >
          <div v-show="toggle" class="option-user">
            <div class="option-item">
              <router-link class="select-item" :to="{ name: '' }">
                <f-icon class="icon" icon="fa-id-card" />
                Tài khoản</router-link
              >
            </div>
            <div class="option-item">
              <router-link class="select-item" :to="{ name: '' }">
                <f-icon class="icon" icon="fa-user-shield" />
                Quản trị</router-link
              >
            </div>
            <div class="option-item" @click="logout">
              <p class="select-item">
                <f-icon class="icon" icon="fa-right-from-bracket" /><span
                  >Đăng xuất</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="container">
      <div class="branding">
        <router-link class="logo" :to="{ name: 'home' }">
          <img src="../assets/logo.png" alt="" />
        </router-link>
      </div>
      <div class="nav-links">
        <ul>
          <router-link class="link" :to="{ name: 'home' }"
            >Trang Chủ</router-link
          >
          <router-link class="link" :to="{ name: 'products' }"
            >Sản Phẩm</router-link
          >
          <router-link class="link" :to="{ name: 'home' }"
            >Pre-Order</router-link
          >
          <router-link class="link" :to="{ name: 'news' }">Tin Tức</router-link>
          <router-link class="link" :to="{ name: 'contact' }">Liên Hệ</router-link>
        </ul>
      </div>
    </nav>
    <f-icon
      @click="toggleMenu"
      v-show="mobile"
      class="menu-icon"
      icon="fa-bars"
    />
    <transition name="mobile-nav">
      <ul v-show="mobileNav" class="mobile-nav d-none">
        <router-link class="link" :to="{ name: 'home' }">Trang Chủ</router-link>
        <router-link class="link" :to="{ name: 'home' }"
          >Bàn Phím Keychron</router-link
        >
        <router-link class="link" :to="{ name: 'home' }"
          >Ghế Công Thái Học</router-link
        >
        <router-link class="link" :to="{ name: 'home' }">Tin Tức</router-link>
        <router-link class="link" :to="{ name: 'home' }"
          >Về Siliconz</router-link
        >
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "header-view",
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windownWidth: null,
      toggle: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    checkScreen() {
      this.windownWidth = window.innerWidth;
      if (this.windownWidth <= 768) {
        console.log("hello");
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMenu() {
      this.mobileNav = !this.mobileNav;
    },
    toggleM() {
      this.toggle = !this.toggle;
    },
    logout() {
      return this.$store.dispatch("logout").then(() => {
        window.location.reload();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#header {
  background-color: #fff;
  padding: 8px 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  .link {
    padding: 8px;
    transition: 0.3s background-color ease;
    &:hover {
      color: #fff;
      text-decoration: none;
      background-color: #201d6c;
    }
  }
  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: 1px solid #999;
    margin-bottom: 8px;
    .left {
      p {
        margin: 0;
      }
      .top-title {
        font-size: 13px;
      }
      .phone-number {
        font-size: 14px;
        font-weight: 600;
        color: #201d6c;
      }
    }
    .right {
      display: flex;
      .icon {
        color: #201d6c;
      }
      .right-item {
        margin-right: 26px;
      }
      .right-item:last-child {
        margin-right: 0;
      }
      .form-search {
        position: relative;
        input {
          border: 2px solid #201d6c;
          border-radius: 20px;
          line-height: 20px;
          padding: 3px 10px;
          &:focus-visible {
            outline: none;
          }
        }

        .search {
          position: absolute;
          right: 10px;
          top: calc(50% - 8px);
        }
      }
      .form-action {
        display: flex;
        .login {
          margin-right: 26px;
        }
      }
      .account {
        position: relative;
        cursor: pointer;
        .option-user {
          position: absolute;
          display: flex;
          flex-direction: column;
          z-index: 99;
          top: 30px;
          left: -16px;
          width: 200px;
          padding: 16px;
          border-radius: 5px;
          background-color: rgba(0, 0, 0, 0.6);
          color: #fff;
          box-shadow: 0px 0px 10px #999;
          p {
            margin-bottom: 0;
          }
          .option-item {
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #201d6c;
            a {
              color: #fff;
            }
            .select-item {
              span {
                margin-left: 8px;
              }
              .icon {
                margin-right: 8px;
              }
            }
          }
          .option-item:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
  nav {
    display: flex;
    .branding {
      display: flex;
      .logo {
        max-width: 200px;
        width: 100%;
        img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }
    }
    .nav-links {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;
      ul {
        margin-bottom: 0;
        .link {
          margin-right: 5px;
        }
        .link:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }
  .mobile-nav {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    padding-left: 20px;
    max-width: 250px;
    position: fixed;
    background-color: #303030;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color: #fff;
    }
  }
}
</style>
