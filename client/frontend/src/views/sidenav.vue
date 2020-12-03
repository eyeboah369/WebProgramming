<template>

    <v-navigation-drawer
      right
      fixed
      style="margin-top: 5vh"
    >
      <v-row class="col" v-for="(n,index) in users" :key="n">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{users[index]}}</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-row>
    </v-navigation-drawer>

</template>

<script>
  export default {
    data () {
      return {

      }
    },
    props: {
      users: Array
    },
    methods: {
      convert(){
        this.users = [...new Set(this.users)]
        console.log(this.users)
      },
      mounted(){
        this.convert()
      }
    }
  }
</script>

<style scoped>
.col{
    box-shadow: "-6px 9.5px 20px -7px #888888";

}
</style>