<template>
    <div>
        <h1>
           Welcome {{ user }}
        </h1>
        <AddPosts :userId="userId"/>
        <Posts :idUser="userId"/>
        
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
    props:{
        user: String,
        userId: Number,
    },

    
}
</script>

<style>
</style>