<template>
    <div>
        <h1>
           <!-- Welcome {{ user }} -->
        </h1>
        <div class="logout" @click="logout()">
            <a>Logout</a>
        </div>
         <AddPosts/> 
        <Posts/>
        
    </div>
</template>

<script>
import AddPosts from "../components/AddPosts.vue";
import Posts from "../components/Posts.vue";

export default {
    name: 'Home',
    components: {
        AddPosts,
        Posts
    },
    methods: 
    {
        logout()
        {
            localStorage.removeItem("token");
            this.$router.replace({name: "login"}).catch(()=>{})
        }
    }

    
}
</script>

<style>
.logout
{
    text-align: right;
}
</style>