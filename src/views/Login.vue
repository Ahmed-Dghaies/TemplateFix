<template>
  <div class="col-md-12">
    <div class="card card-container">
      <div class="auth-card-header header-primary">
        <h2 class="has-text-centered">CYNOIA</h2>
      </div>
      <form name="form" @submit.prevent="handleLogin">
        <div class="form-group">
          <input
            v-model="user.email"
            v-validate="'required'"
            type="text"
            class="form-control"
            name="email"
            placeholder="Email"
          />
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
          <div v-if="errors.has('email')" class="alert alert-danger" role="alert">email is required!</div>
        </div>
        <div class="form-group">
          <input
            v-model="password"
            v-validate="'required'"
            type="password"
            class="form-control"
            name="password"
            placeholder="Password"
          />
          <i class="fa fa-key" aria-hidden="true"></i>
          <div
            v-if="errors.has('password')"
            class="alert alert-danger"
            role="alert"
          >Password is required!</div>
        </div>
        <div class="form-group">
          <button class="button" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
        </div>
      </form>
      <p class="has-account">
        <a href="/register">Don't have an account?</a>
      </p>
    </div>
  </div>
</template>

<script>
import User from "../models/user";
var sha512 = require("js-sha512");

export default {
  name: "Login",
  data() {
    return {
      user: new User("", "", "", "", "", "", "", "", "", "", "", ""),
      loading: false,
      message: "",
      password: ""
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.email && this.password) {
          this.user.password = sha512(this.password);
          this.$store.dispatch("auth/login", this.user).then(
            () => {
              this.$router.push("/profile");
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    }
  }
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Pacifico&display=swap";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "./../assets/css/auth.css";
</style>