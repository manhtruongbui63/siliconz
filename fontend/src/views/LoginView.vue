<template>
  <div class="form-wrap">
    <div class="background">
      <img src="../assets/img/banners/login-background.png" alt="" />
    </div>
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" :to="{ name: 'register' }"
          >Register</router-link
        >
      </p>
      <h2>Login</h2>
      <p v-show="error" class="error-text">
        <f-icon class="icon" icon="fa-triangle-exclamation" />
        {{ errorMessage }}
      </p>
      <div class="inputs">
        <div class="error-text">{{ errors.email }}</div>
        <div class="form-group">
          <input
            class="form-control"
            type="email"
            placeholder="Email address"
            v-model="email"
          />
          <f-icon class="icon" icon="fa-envelope" />
        </div>
        <div class="error-text">{{ errors.password }}</div>
        <div class="form-group">
          <input
            class="form-control"
            type="password"
            placeholder="Password"
            v-model="password"
          />
          <f-icon class="icon" icon="fa-lock" />
        </div>
        <button class="btn btnSubmit" @click.prevent="login">Login Now</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login-view",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errors: {
        email: "",
        password: "",
      },
      errorMessage: "",
      status: 0,
    };
  },
  methods: {
    validate() {
      let isValid = true;
      var regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/igm;
      var regexPassword = /^[0-9A-Za-z]{8,}$/;
      this.errors = {
        email: "",
        password: "",
      };
      if (!this.email || !regexEmail.test(this.email)) {
        this.errors.email = "Email chưa đúng định dạng! (Ex: email@gmail.com)";
        isValid = false;
      }
      if (!this.password || !regexPassword.test(this.password)) {
        this.errors.password = "Password ít nhất 8 kí tự, không có kí tự đặc biệt! (Ex: Password123)";
        isValid = false;
      }
      return isValid;
    },
    login() {
      if (this.validate()) {
        return this.$store
          .dispatch("login", {
            email: this.email.trim(),
            password: this.password.trim(),
          })
          .then((res) => {
            console.log(res);
            this.status = res.status;
            if (this.status === 200) {
              this.error = false;
              this.errorMessage = "";
              this.$router.push({ name: "home" });
              window.location.reload();
            }
            this.error = true;
            this.errorMessage = res.message;
          });
      }
      this.error = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.form-wrap {
  position: relative;
  .background {
    max-width: 100%;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .login {
    position: absolute;
    top: calc(50% - 250px);
    right: 0;
    width: 50%;
    padding: 50px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    transform: translate(-50%);

    h2 {
      text-align: center;
      font-size: 32px;
      margin-bottom: 26px;
      text-transform: uppercase;
    }
    .error-text {
      color: #ff3d43;
      font-size: 14px;
      font-style: italic;
      text-align: center;
    }

    .login-register {
      text-align: center;
      margin-bottom: 40px;
      .router-link {
        color: #fff;
      }
    }
    .inputs {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 450px;
      margin: 0 auto;
      .error-text {
        text-align: left;
      }
      .form-group {
        position: relative;
        input {
          width: 100%;
          border: none;
          padding-left: 35px;
          background-color: #fff;
          &:focus {
            outline: none;
          }
        }
        .icon {
          position: absolute;
          left: 8px;
          top: calc(50% - 8px);
          color: #211d70;
        }
      }
      .btnSubmit {
        background-color: #211d70;
        color: #fff;
        margin-top: 35px;
      }
    }
  }
}
</style>
