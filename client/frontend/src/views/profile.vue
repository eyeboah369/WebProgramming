<template>
  <v-app>
<nav class="navbar" role="navigation" aria-label="main navigation" style="position: fixed; width: 100%; background-color: lightgreen; ">
  <div class="navbar-brand">
    <a class="navbar-item" href="/home" style="color: black">
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
            <a class="button is-primary" href="/home">
              <strong>Home</strong>
            </a>
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

    <v-row>
        <v-col cols="12"
        sm="8"
        md="8">
  <v-card
    style="margin: 0 auto; margin-top: 10vh; height: 80vh"
    max-width="700"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{user.fname}} {{user.lname}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      <p><strong>Profile</strong></p>
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Welcome to your profile! </div>
    </v-card-text>

    <v-card-actions>
      <v-row justify="center" style="margin-top: 3vh">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="590"
      style="height: 200vh"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="success"
          dark
          v-bind="attrs2"
          v-on="on"
        >
          Show Log
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          Get Log
        </v-card-title>
        <v-card-text>Log</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

     <v-row justify="center" style="margin-top: 3vh">
    <v-dialog
      v-model="dialog1"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="error"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Edit Log
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          Log
        </v-card-title>
        <v-card-text> edit log</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog1 = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog1 = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    </v-card-actions>
  </v-card>
  </v-col>

    <v-col cols="6"
        md="4" style="margin-top: 5vh">
      <sidenav v-bind:users="othersArr"/>
      
      </v-col>

  </v-row>



</v-app>
</template>

<script>
import jwt_decode from "jwt-decode";
import sidenav from './sidenav';
import addLog from "./addlog"
export default {
  data() {
    return {
      user: {},
      otherUsers: [],
      othersArr: [],
      dialog: false,
      dialog1: false
    };
  },
  components: {
    addLog,
    //log,
    sidenav
  },

  methods: {
    async getUsers() {
        try {
          this.otherUsers = await this.$http.get("/WebProgramming-Exercise-App-/userlist");
          this.otherUsers.data = [...new Set(this.otherUsers.data)];
          for(var i = 0; i < this.otherUsers.data.length; i++){
            if(this.otherUsers.data[i].fname != "admin" & this.otherUsers.data[i].fname != this.user.fname)
              this.othersArr.push(this.otherUsers.data[i].fname)
          }
          this.othersArr = [...new Set(this.othersArr)]
           console.log("This is the user list: ", this.othersArr)
        }
        catch(err){
          console.log("This is the error: ", err);
        }
    },
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      console.log("token : " + token);
      let decoded = jwt_decode(token);
      console.log("Decoded: " + typeof decoded.fname);
      this.user = decoded;
      console.log("user information: " + this.user.fname);
      console.log("exercise information: " + this.user.exercises);


    },
    logout() {
      localStorage.removeItem("jwt");
      console.log("logging out...");
      this.$swal.fire("Success", "Logged out", "success");
      this.$router.push("/login");
    },
  },
  mounted() {
      this.getUserDetails(),
      this.getUsers()
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