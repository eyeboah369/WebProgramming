<template>
    <v-app style="">
        <v-container fluid class="white lighten-5" >
       <v-col cols="12"
        sm="6"
        md="8">
       <h1 class="greeting">Welcome {{user.fname}}!</h1>
       <v-col class="col"
          style="margin-bottom: 8vh;"
       > 
          <v-card
            class="pa-2" 
            style="box-shadow: 0px 9.5px 15px -7px #888888; height: 76vh; margin-bottom: 15vh"
            outlined
            tile
          >
            <h1><strong>{{user.fname}} {{user.lname}}</strong></h1><br />
            <h2>Today's Exercises:</h2><br />

            <div v-for="item in dailyLog" :key="item">
               {{ item }}
            </div>

          </v-card>
        </v-col>
      </v-col>
    </v-container>
    </v-app>
</template>


<script>
import jwt_decode from "jwt-decode";
export default {
  props: {
    email: {
      type: String
    }
  },
data() {
    return {
      user: {},
      log: {}
    };
  },

    methods: {
        showLog() {
          let token = localStorage.getItem("jwt");
          console.log("token : " + token);
          let decoded = jwt_decode(token);
          console.log("Log email: " + decoded.email)
          this.user = decoded;
        },
        mounted() {
          this.showLog();
       }
        
        
        }
}




</script>

<style scoped>
.col{
    box-shadow: "-6px 9.5px 20px -7px #888888";
    height: 10em;
}
</style>