<template>
  <div>
      <h3 style="margin-left:80px">Add Post</h3>
      <div class="add">
             <div class="addPost">
                 <input type="text" placeholder="AddTitle" v-model="model.title" class="inputAdd">
                 <input type="text" placeholder="AddPost" v-model="model.body" class="inputAdd">
             </div>
            <button class="btnAdd" @click="addPost(model)">Add</button>
        </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'AddPosts',

    data(){
        return {
            model:{
                title:'',
                body:'',
                userId:this.userId
            }  
        }
    },
    props:{
        userId:Number
    },
    methods: {
        ...mapActions(['addPost']),
    },
}
</script>

<style>
.add{
    display: flex;
   margin-left: 80px;
   margin-right: 80px;
}
.addPost
{
    flex: 12;
}
.inputAdd{
    background: white;
    padding: 10px;
    outline: 0;
}
.btnAdd{
    flex: 1;
}
</style>