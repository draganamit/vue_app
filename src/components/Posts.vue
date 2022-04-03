<template>
<div>
    <h3 style="margin-left:80px"> Your Posts:</h3>
    <div v-if="allPosts.length">

  <div class="posts" v-for="(post,key) in allPosts" :key="key">
      <div class="post">{{ post.text}}</div>
      <div >
         <div class="delete" @click="deletePost(post.id)">X</div>
      </div>
  </div>
    </div>

  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';
export default {
    name:'Posts',

    
    methods:{
        ...mapActions(['fetchPosts', 'deletePost']),
        ...mapMutations(['setUserPosts']),
    },
    computed: mapGetters(['allPosts']),
    async created(){
        await this.fetchPosts();
        //this.setUserPosts(this.idUser);
    },
    updated(){
        console.log('updated')
    }
}
</script>

<style>
.posts
{
    display: flex;
    background-color:rgb(80, 104, 238);
    border-color: transparent;
    margin-top: 20px;
    color: white;
    border-radius: 5px;
    padding: 1rem;
    margin-right: 80px;
    margin-left: 80px;
}
.delete{
    flex: 1;
    cursor: pointer;
    border:1px solid white;
    border-radius: 50%;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin: 0;
    text-align: center;
    background-color:tomato;
    
}
.post{
    flex: 25;
    margin-right: 10px;
}
</style>