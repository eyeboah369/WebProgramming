<template>
<div style="margin: -3vh; margin-left: -3vw">
<div class="container is-fullhd" style="margin-bottom: 5vh; background-color: lightgreen">
       <label class="label is-medium">Exercise App</label>
</div>
<div class="container">
<form @submit.prevent="loginUser" class="columns">
    <div class="column">
        <h1>Welcome</h1>
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
        </div>
    </form>
    <h6 class="subtitle is-6">Not signed up? Register <router-link to="/register">here</router-link></h6>
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
          let token = res.token;
          this.$swal.fire("Success", "Login Was successful", "success");
          localStorage.setItem("jwt", token);
          this.$router.push("/home");
        }
      }
      catch(err){
        const error = err.response
        if(error.status == 401){
          this.$swal.fire("Error", "Incorrect email or password, try again", "error");
        }
      }
    }
  }
};
</script>