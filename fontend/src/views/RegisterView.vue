<template>
  <div class="form-wrap">
    <div class="background">
      <img src="../assets/img/banners/login-background.png" alt="" />
    </div>
    <form class="login">
      <h2>Register</h2>
      <p v-show="error" class="error-text">
        <f-icon class="icon" icon="fa-triangle-exclamation" />
        {{ errorMessage }}
      </p>
      <div class="inputs">
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            placeholder="First Name"
            v-model="firstName"
          />
          <f-icon class="icon" icon="fa-user" />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            placeholder="Last Name"
            v-model="lastName"
          />
          <f-icon class="icon" icon="fa-user" />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="email"
            placeholder="Email"
            v-model="email"
          />
          <f-icon class="icon" icon="fa-envelope" />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="password"
            placeholder="Password"
            v-model="password"
          />
          <f-icon class="icon" icon="fa-lock" />
        </div>
        <button class="btn btnSubmit" @click.prevent="register">
          Register Now
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login-view",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      error: null,
      errorMessage: "",
      status: 0,
    };
  },
  methods: {
    register() {
      return this.$store
        .dispatch("register", {
          firstName: this.firstName.trim(),
          lastName: this.lastName.trim(),
          email: this.email.trim(),
          password: this.password.trim(),
        })
        .then((res) => {
          console.log(res);
          this.status = res.status;
          if (this.status === 201) {
            this.error = false;
            this.errorMessage = "";
            this.$router.push({ name: "home" });
            window.location.reload();
          }
          this.error = true;
          this.errorMessage = res.message;
        });
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
      margin-bottom: 32px;
      text-transform: uppercase;
    }

    .error-text {
      color: #ff3d43;
      font-size: 14px;
      font-style: italic;
      text-align: center;
    }

    .inputs {
      display: flex;
      flex-direction: column;
      max-width: 450px;
      margin: 0 auto;
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
