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
        sm="8"
        md="8">
       <h1 class="greeting">Welcome {{user.fname}}!</h1>
        <h2>Today's Exercises:</h2><br />
        <div v-for="item in dailyLog" :key="item" style="display: inline-block; padding-right: 4vw;">
       <v-row class="row"> 
          <v-card
            class="pa-2" 
            style="box-shadow: 0px 9.5px 15px -7px #888888; height: 60vh; margin-bottom: 10vh; width: 50vw; "
            outlined
            tile
          >
               <h2 style="font-size: 21px; padding-bottom: 5vh; text-align: center"><strong>{{ item }}</strong></h2>
            <v-row style="margin: 0 auto; width: 50%">
              <v-col>
               <v-checkbox 
              v-model="ex4"
              label="Completed"
              color="success"
              value="success"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="In Progress"
              color="orange"
              value="orange"
              hide-details
            ></v-checkbox>

            <v-checkbox
              v-model="ex4"
              label="Not Done"
              color="red"
              value="red"
              hide-details
            ></v-checkbox>
            </v-col>

            <v-col>
              <v-progress-circular

              :rotate="90"
              :size="130"
              :width="15"
              :rep ="rep"
              color="red"
            >
            {{reps[0]}}
    </v-progress-circular>

          </v-col>
            </v-row>

          </v-card>
        </v-row>
        </div>
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
import sidenav from './sidenav';
import addLog from "./addlog"
export default {
  data() {
    return {
      dialog: false,
      user: {},
      value: 0,
      dailyLog: [],
      reps: []
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
      console.log("exercise information: " + this.user.exercises);


    },
    getDayLog(){
      let d = new Date();
      let weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

      let currDay = weekday[d.getDay()];

      for(let i = 0; i < this.user.exercises.length; i++){
        if(this.user.exercises[i].days.includes(currDay)){
          this.dailyLog.push(this.user.exercises[i].exercise_name);
          this.reps.push(this.user.exercises[i].reps);
        }
      }
      this.dailyLog = [...new Set(this.dailyLog)];
      this.reps = [...new Set(this.reps)];
      console.log(this.dailyLog);
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
      this.getDayLog();
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