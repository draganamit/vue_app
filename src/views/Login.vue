<template>
  <div id="login">
    <div class="cantainer">
      <form>
        <div class="log">
          <label class="login">LOGIN</label><br>
        </div>
        <div class="user">
          <label class="username">Username:</label>
        </div>
        <div class="input">
          <input type="text" v-model="username">
        </div>
        <div class="user">
          <label class="username">Password:</label>
        </div>
        <div class="input">
          <input type="password" v-model="password">
        </div>
        <div class="btn">
          <button @click="login()">Login</button>
        </div>
      </form>
    </div>
  </div>
  
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'Login',
  data() {
      return{
        username:"",
        password:"",
      }
     
  },
  components: {

 
  },
  methods: {
      ...mapActions(['fetchUsers']),
      login()
      {
          if(this.username!="" && this.password!="")
          {
              /*if(this.username==this.$parent.Account.username && this.$parent.Account.password)
              {
                  this.$emit("authenticated",true);
                  this.$router.replace({name: "home"})
              }
              else{
                  console.log("The username and/or password is incorrect");
              }*/

              /*for(var i=0;i<this.allUsers.length;i++)
              {
                  if(this.username==this.allUsers[i].username && this.password==this.allUsers[i].website)
                  {
                    
                      console.log(this.allUsers[i].username, this.allUsers[i].website);
                      this.$emit("authenticated",true);
                      this.$router.replace({name: "home",params: {user: this.username }}).catch(()=>{})
                      i+=this.allUsers.length;
                      
                  }
                  else if(i==this.allUsers.length-1){
                        console.log("The username and/or password is incorrect");
                  }
              }*/

              const result = this.allUsers.find(({username}) => username===this.username);

              if(result)
              {
                if(result.website==this.password)
                {
                  this.$emit("authenticated",true);
                  console.log('result', result);
                  this.$router.replace({name: "home",params: {user: result.name, userId: result.id }}).catch(()=>{})
                }
                else
                {
                  console.log("The password is incorrect");
                }
              }
              else
                {
                  console.log("The username is incorrect");
                }
          }
          else{
              console.log("The username and password must be present");
          }
      }
  },
  computed: mapGetters(['allUsers']),
  created() {
      this.fetchUsers()
  }
}
</script>

<style>
body
{
  background:lightskyblue;
  align-content: center;
}
.cantainer
{
  margin-top: 80px;
  margin-left: 30%;
  margin-right: 30%;
  padding: 25px;
  background: white;
}
.login{
  color:rgb(80, 104, 238);
  font-weight: bold;
  font-size: 1.5em;
}
.username{
  color: darkgray;
}
.log{
  margin-bottom: 40px;
  display: flex;
}
.user{
  margin-bottom: 10px;
  display: flex;
}
.input{
  display: flex;
  margin-bottom: 20px;
  height: 40px;
}
input{
  width: 100%;
  background-color:silver;
  border-color: transparent;
}
.btn{
  margin-top: 40px;
  height: 40px;
  display: flex;
}
button{
  background-color:rgb(80, 104, 238);
  border-color: transparent;
  width: 100%;
  color: white;
  font-weight: bold;
  font-size: 1em;
}
</style>
