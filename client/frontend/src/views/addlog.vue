<template>
    <form @submit.prevent="addExercise">  
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
          <a class="button is-primary" v-bind="attrs" v-on="on">
            <strong>Add to Log</strong>
          </a>
      </template>

      
      <v-card style="background-color: #76F3A2">
        <v-card-title style="text-align: center;">
          <span class="headline">Add Exercise!</span>
        </v-card-title>
              <v-col>
                
              <b-field label="Find an Exercise">
                <b-autocomplete
                    v-model="name"
                    :data="filteredDataArray"
                    placeholder="e.g. situps"
                    icon="magnify"
                    clearable
                    @select="option => selected = option">
                    <template slot="empty">No results found</template>
                </b-autocomplete>
              </b-field>

              </v-col>
              <v-col>
                <v-text-field
                  label="Reps"
                  hint="How many of this exercise do you want to do?"
                  v-model="user_log.reps"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-autocomplete
                  :items="['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']"
                  label="Frequency"
                  multiple
                  v-model="user_log.days"
                ></v-autocomplete>
              </v-col>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            dialog = this.dialog
            text
            @click="addExercise"
          >
            Add to Log
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </form>
</template>


<script>
import jwt_decode from "jwt-decode";
export default {
    name: 'addLog',

    data: () => ({
      dialog: false,
      user_log: {
              email: "",
              exercise_name: "",
              reps: 0,
              days: []
      },
      data: [],
                name: '',
                selected: null
    }),
    computed: {
      //inside this aspect of the function using the axios call to the server that querys the database
      //for each time there is a new input to the field the component would make a new async call to the 
      //server like so:
      //let res = await this.$http.get("/WebProgramming-Exercise-App-/getList");
             filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        },
    methods: {
      async addExercise() {
        this.dialog = false;
        console.log("Executed successfully");
        try{
          let token = localStorage.getItem("jwt");
          console.log("token : " + token);
          let decoded = jwt_decode(token);
          this.user_log.email = decoded.email
          console.log(this.user_log);
          this.$swal.fire('Added to Log!');
          let res = await this.$http.post("/WebProgramming-Exercise-App-/updateLog", this.user_log);
          console.log("Add log response: " + res);
        }
        catch(err){
          console.log("This is the addlog error: " + err);
        }
    },

    }
}
</script>