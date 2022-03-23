<template>
  <div>
    <div class="logout">
      <router-link v-if="authenticated" to="/login" @click.native="logout()" replace="">Logout</router-link>
    </div>
    <router-view @authenticated="setAuthenticated"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
     authenticated: false,
     /*Account: {
            username: "Dragana",
            password: "Dragana123"
      }*/
    }
  },
  mounted(){
    if(!this.authenticated)
    {
      this.$router.replace({name: "login"}).catch(()=>{});
    }
  },
  methods:{
    setAuthenticated(status){
      this.authenticated=status;
    },
    logout(){
      this.authenticated=false;
    }
  }
}
</script>

<style>
.logout{
  text-align: right;
}

</style>