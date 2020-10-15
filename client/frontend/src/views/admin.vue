<template>
<v-app>    
<nav class="navbar" role="navigation" aria-label="main navigation" style="background-color: lightgreen; margin-bottom: 5vh">
  <div class="navbar-brand">
    <a class="navbar-item" href="/login" style="color: black">
      <h1><strong>Exercise App</strong></h1>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
                  <addLog />
         <!-- <a class="button is-light">
            Log in
          </a> -->
        </div>
      </div>
    </div>
</nav>

<v-container fluid class="white lighten-5" >
        <v-row
      class="d-flex align-center justify-center pa-4 mx-auto"
      max-width="550"
      min-height="76"
      outlined
    >

       <h1 class="greeting">Welcome Admin1!</h1>
      
    </v-row>

        <log />
    </v-container>

      <footer class="footer">

    <nav class="navbar" role="navigation" aria-label="main navigation">

  <div class="navbar-end">
    <button v-on:click="logout" class="button is-danger is-rounded">Logout</button>
    </div>
</nav>

</footer>
</v-app>
</template>

<script>
export default {
    

    methods: {
      logout() {
      localStorage.removeItem("jwt");
      console.log("logging out...");
      this.$swal.fire("Success", "Logged out", "success");
      this.$router.push("/login");
    }
    }
}
</script>

<style scoped>

.footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1vh;
  color: white;
  background-color: white;
  text-align: center;
}

.greeting {
  font-size: 1.5em;
  font-weight: bold;
}

.footer{
  padding-top: 4px !important;
  padding-bottom: 3rem;
}
</style>