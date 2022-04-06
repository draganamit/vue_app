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
          Not registred? <a @click="registration()">Create an account</a>
      </form>
      </div>
        <div class="register" v-if="register">
          <form @submit.prevent="reg()">
            <div class="cls">
              <div class="empty"></div>
              <div class="close" @click="close()">X</div>
            </div>
            <div class="log"><label class="login">Registration</label><br /></div>
        <div class="user">
          <label class="username">Username:</label>
        </div>
        <div class="input">
          <input type="text" v-model="model.username"/>
        </div>
        <div v-if="errorRegister" class="errorReg">
          Polje mora biti popunjeno!
        </div>
        <div class="user">
          <label class="username">Password:</label>
        </div>
        <div class="input">
          <input type="password" v-model="model.password"/>
        </div>
        <div v-if="errorRegister" class="errorReg">
          Polje mora biti popunjeno!
        </div>
        <div class="user">
          <label class="username">Confirm Password:</label>
        </div>
        <div class="input">
          <input type="password" v-model="confirmPassword"/>
        </div>
        <div v-if="errorRegister" class="errorReg">
          Polje mora biti popunjeno!
        </div>
        <div v-if="errorConfirm" class="errorReg">
          Password i ConfirmPassword nisu jednaki!
        </div>
        <div class="btn">
          <button>Register</button>
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
      confirmPassword: "",
      errorLogin: false,
      register: false,
      errorRegister: false,
      errorConfirm: false
    };
  },
  components: {},
  methods: {
    ...mapActions(["loginUser", "registerUser"]),
    async login() {
      if (this.model.username != "" && this.model.password != "") {
        try {
          const response = await this.loginUser(this.model);

          localStorage.setItem("token", "Bearer " + response.data.data);
          this.$router.replace({name: "home"}).catch(()=>{})
        } catch (error) {
          this.errorLogin = true;
        }
      } else {
        console.log("The username and password must be present");
      }
    },
    async reg()
    {
      if (this.model.username != "" && this.model.password != "" && this.confirmPassword !="") {
        if(this.model.password==this.confirmPassword)
        {
        try { 

          await this.registerUser(this.model);
          this.register=false;
        } catch (error) {
          console.log("error:", error);
          
        }
        }
        else
        {
          this.errorConfirm=true;
        }
      } 
      else {
        console.log("The username and password must be present");
        this.errorRegister = true;
      }
    },
    registration()
    {
      this.register=true;
    },
    close()
    {
      this.register=false;
    }
  },
  watch: {
    model: {
      deep: true,
      handler() {
        this.errorLogin = false;
        this.errorRegister = false;
      },
    },
    confirmPassword()
    {
      this.errorConfirm = false;
    }
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
.errorReg
{
  color: red;
  background: white;
  align-content: top;
  margin-bottom: 20px;
}
a{
      text-decoration: underline;
      cursor: pointer;
}
.register
{
  position: absolute;
  width:50%;
  top:10%;
  left:20%;
  padding: 25px;
  background: white
}
.close
{
  color: white;
  border: 1px solid white;
  background: red;
  align-items: center;
  justify-content: center;
  height: 25px;
  display: flex;
  flex: 2;
  cursor: pointer;
  border-radius: 10%;
}
.cls{
  display: flex;
}
.empty
{
  flex: 25;
}

</style>
