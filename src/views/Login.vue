<template>
  <div id="login">
    <div class="cantainer">
      <form @submit.prevent="login()">
        <div class="log"><label class="login">LOGIN</label><br /></div>
        <div class="user">
          <label class="username">Username:</label>
        </div>
        <div class="input">
          <input type="text" v-model="model.username" />
        </div>
        <div class="user">
          <label class="username">Password:</label>
        </div>
        <div class="input">
          <input type="password" v-model="model.password" />
        </div>
        <div v-if="errorLogin" class="error">
          Pogrešno korisničko ime ili lozinka
        </div>
        <div class="btn">
          <button>Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Login",
  data() {
    return {
      model: {
        username: "",
        password: "",
      },

      errorLogin: false,
    };
  },
  components: {},
  methods: {
    ...mapActions(["loginUser"]),
    async login() {
      if (this.model.username != "" && this.model.password != "") {
        try {
          const response = await this.loginUser(this.model);

          localStorage.setItem("token", "Bearer " + response.data.data);
          this.$router.replace({name: "home"}).catch(()=>{})
        } catch (error) {
          this.errorLogin = true;
        }

        /*const result = this.allUsers.find(({username}) => username===this.username);

              if(result)
              {
                if(result.password==this.password)
                {
                  this.$emit("authenticated",true);
                  console.log('result', result);
                  this.$router.replace({name: "home",params: {/*user: result.name, userId: result.id }}).catch(()=>{})
                }
                else
                {
                  console.log("The password is incorrect");
                }
              }
              else
                {
                  console.log("The username is incorrect");
                }*/
      } else {
        console.log("The username and password must be present");
      }
    },
  },
  watch: {
    model: {
      deep: true,
      handler() {
        this.errorLogin = false;
      },
    },
  },
};
</script>

<style>
body {
  background: lightskyblue;
  align-content: center;
}
.cantainer {
  margin-top: 80px;
  margin-left: 30%;
  margin-right: 30%;
  padding: 25px;
  background: white;
}
.login {
  color: rgb(80, 104, 238);
  font-weight: bold;
  font-size: 1.5em;
}
.username {
  color: darkgray;
}
.log {
  margin-bottom: 40px;
  display: flex;
}
.user {
  margin-bottom: 10px;
  display: flex;
}
.input {
  display: flex;
  margin-bottom: 20px;
  height: 40px;
}
input {
  width: 100%;
  background-color: silver;
  border-color: transparent;
}
.btn {
  margin-top: 40px;
  height: 40px;
  display: flex;
}
button {
  background-color: rgb(80, 104, 238);
  border-color: transparent;
  width: 100%;
  color: white;
  font-weight: bold;
  font-size: 1em;
}
.error {
  margin: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  color: red;
  background: white;
}
</style>
