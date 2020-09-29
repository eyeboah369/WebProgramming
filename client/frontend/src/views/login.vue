<template>
  <div class="login">
    <login />
  </div>
</template>

<script>
import login from '../components/auth/login.vue'

export default {
  name: 'App',
  components: {
    login
  }
}
</script>