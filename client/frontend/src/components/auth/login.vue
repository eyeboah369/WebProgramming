<template>
<div style="margin: -3vh; margin-left: -3vw">
<div class="container is-fullhd" style="margin-bottom: 5vh; background-color: lightgreen">
       <label class="label is-medium">Exercise App</label>
</div>
<div class="columns">
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
            <button class="button is-success">
            Login
            </button>
        </p>
        </div>


</div>
</div>
</div>
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
    async loginUser() {}
  }
};
</script>