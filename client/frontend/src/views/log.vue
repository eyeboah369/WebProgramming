<template>
    <v-app style="">
        <v-container fluid class="white lighten-5" >
        <v-col
        :align="align"
        no-gutters
      >
        <v-col class="col"
          v-for="n in 2"
          :key="n"
          style="margin-bottom: 38vh;"
        >
          <v-card
            class="pa-2" 
            style="box-shadow: 0px 9.5px 15px -7px #888888;height: 55vh; margin-bottom: 15vh"
            outlined
            tile
          >
            One of three columns
          </v-card>
        </v-col>
      </v-col>
    </v-container>
    </v-app>
</template>


<script>
//import jwt_decode from "jwt-decode";
export default {
  
    data() {
        return{
            count: 0,
        }
    },

    methods: {
        /*addLog(){
          try{
            let token = localStorage.getItem("jwt");
            let decoded = jwt_decode(token);
            this.user_log = decoded.log;
            console.log("This is the log: " + this.user_log.log);
          }
          catch(err){
            console.log("Erorr message: " + err);
          }
        } 
    },
    mounted(){
      this.addLog();
    */}
}




</script>

<style scoped>
.col{
    box-shadow: "-6px 9.5px 20px -7px #888888";
    height: 10em;
}
</style>