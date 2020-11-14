<template>
<div>
<nav class="navbar" role="navigation" aria-label="main navigation" style="background-color: lightgreen; margin-bottom: 5vh">
  <div class="navbar-brand">
    <a class="navbar-item" href="/WebProgramming-Exercise-App-/login">
      <h1><strong>Exercise App</strong></h1>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
<div class="container">
<form @submit.prevent="loginUser" class="columns">
    <div class="column">
        <h1 class="welcome">Welcome</h1>
    </div>
    <div class="column">
        <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input 
                class="input" 
                type="email"
                id="email"
                placeholder="Email"
                v-model="login.email"
            />
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <input 
                class="input" 
                type="password" 
                placeholder="Password"
                v-model="login.password"
            />
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button type="submit" class="button is-success">
            Login
            </button>
        </p>
        </div>
            <h6 class="subtitle is-6" style="justify-content: center">Not signed up? Register <router-link to="/WebProgramming-Exercise-App-/register">here</router-link></h6>
        </div>
    </form>
</div>

</div>
<!--</div>-->
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async loginUser() {
      try {
        let res = await this.$http.post("/login", this.login);
        let status = res.status

        if(status == 200){
            let token = res.data.token;
              if(this.login.email == "admin1@gmail.com"){
                this.$swal.fire("Success", "Login Was successful", "success");
                this.pushAdmin(token);
              }
          }
          
          if(status == 200 && this.login.email != "admin1@gmail.com"){
            let token = res.data.token;
              //console.log(res.data.token);
          this.$swal.fire("Success", "Login Was successful", "success");
          localStorage.setItem("jwt", token);
          this.$router.push("/home");

            }

        else{
          console.log("Something went wrong...");
        }
      }
      catch(err){
        const error = err.response
        if(error.status == 401){
          this.$swal.fire("Error", "Incorrect email or password, try again", "error");
        }
      }
    },
    pushAdmin(token){
      localStorage.setItem("jwt", token);
      this.$router.push("/admin");
    }
  }
};
</script>

<style scoped>

.column{
  display: flex;
    justify-content: center;
    flex-direction: column;
}

.welcome{
  color: lightgreen;
  font-size: 4em;
  font-weight: bold;
}
</style>