<template>
    <div>
        <h1>
           <!-- Welcome {{ user }} -->
        </h1>
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

    
}
</script>

<style>
</style>