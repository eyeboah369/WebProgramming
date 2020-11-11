<template>
<div>
<nav class="container is-fullhd" style="height: 7vh; margin-bottom: 5vh; background-color: lightgreen">
       <label class="label is-medium">Exercise App</label>
</nav>
<div class="container">
<form @submit.prevent="registerUser" class="columns">
    <div class="column">

        <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input 
                class="input" 
                type="text"
                id="fname"
                placeholder="First Name"
                v-model="register.fname"
            />
        </p>
        </div>

        <div class="field">
        <p class="control has-icons-left">
            <input 
                class="input" 
                type="text" 
                id="lname"
                placeholder="Last Name"
                v-model="register.lname"
            />
        </p>
        </div>

        <div class="field">
        <p class="control has-icons-left">
            <input 
                class="input" 
                type="email" 
                id="email"
                placeholder="Email"
                v-model="register.email"
            />
        </p>
        </div>

        <div class="field">
        <p class="control has-icons-left">
            <input 
                class="input" 
                type="text" 
                id="uname"
                placeholder="Username"
                v-model="register.uname"
            />
        </p>
        </div>

        <div class="field">
        <p class="control has-icons-left">
            <input 
                class="input" 
                type="password" 
                id="password"
                placeholder="Password"
                v-model="register.password"
            />
        </p>
        </div>

        <div class="field">
        <p class="control">
            <button v-on:click="registerUser()" class="button is-success" type="submit">
            Register
            </button>
        </p>
        </div>
    </div>
    </form>
    <h6 class="subtitle is-6">Signed up? Login <router-link to="/login">here</router-link></h6>
</div>
</div>


</template>

<script>
export default {
  data() {
    return {
      register: {
        fname: "",
        lname: "",
        email: "",
        uname: "",
        password: "",
        exercises: [{
              exercisse_name: null,
              reps: null,
              days: []
          }]
      }
    };
  },
  methods: {

    async registerUser() {
        try{
            let res = await this.$http.post("/register", this.register);
            let status = res.status
            if(status == 200){
                //localStorage.setItem("jwt", token);
                this.$swal.fire("Success", "Registration Was successful", "success");
                this.$router.push("/login");
            }
            else{
                this.$swal.fire("Error", "Something went wrong, try again", "error");
            }
        }
        catch(err){
            const error = err.response
            if(error.status == 409){
                //TODO: Find a secure alert message for registering an email already in the database
                this.$swal.fire("Error", "Email already exists,", "error");
            }
            else{
                this.$swal.fire("Error", "Something Went wrong when registeering, please try again", "error");
            }
        }
    }
  }
};
</script>