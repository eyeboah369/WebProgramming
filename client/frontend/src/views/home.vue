<template>
  <v-app>
<nav class="navbar" role="navigation" aria-label="main navigation" style="position: fixed; width: 100%; background-color: lightgreen; ">
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
        </div>
      </div>
    </div>
    <footer class="footer">

    <nav class="navbar" role="navigation" aria-label="main navigation">

  <div class="navbar-end">
    <button v-on:click="logout" class="button is-danger is-rounded">Logout</button>
    </div>
</nav>

</footer>
</nav>
      <v-container fluid class="white lighten-5" style="margin-top: 5vh">
        
        <v-row
      class="d-flex align-center justify-center pa-4 mx-auto"
      max-width="550"
      min-height="76"
      outlined
    >
      <v-col cols="12"
        sm="6"
        md="8">
       <h1 class="greeting">Welcome {{user.fname}}!</h1>
       <v-col class="col"
          style="margin-bottom: 8vh;"
       > 
          <v-card
            class="pa-2" 
            style="box-shadow: 0px 9.5px 15px -7px #888888;height: 55vh; margin-bottom: 15vh"
            outlined
            tile
          >
            Hey there
          </v-card>
        </v-col>
       </v-col>

      <v-col cols="6"
        md="4" style="margin-top: 5vh">
      <sidenav />
      
      </v-col>
      
    </v-row>

    </v-container>


</v-app>
</template>


<script>
import jwt_decode from "jwt-decode";
//import log from "./log";
import sidenav from './sidenav';
import addLog from "./addlog"
export default {
  data() {
    return {
      dialog: false,
      user: {},
      //log: []
    };
  },
  components: {
    addLog,
    //log,
    sidenav
  },

  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      console.log("token : " + token);
      let decoded = jwt_decode(token);
      console.log("Decoded: " + typeof decoded.fname);
      this.user = decoded;
      console.log("user information: " + this.user.fname);

    },
    logout() {
      localStorage.removeItem("jwt");
      console.log("logging out...");
      this.$swal.fire("Success", "Logged out", "success");
      this.$router.push("/login");
    },
  },
  mounted() {
      this.getUserDetails();
  }
};
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
  
}

.footer{
  padding-top: 4px !important;
  padding-bottom: 3rem;
}
</style>