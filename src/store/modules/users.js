import axios from "axios";

const token = localStorage.getItem("token");
const authAxios  = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 1000,
    headers:{
        Authorization: token
    }
  });
const state= {
    users: [],
    posts:[]
}

const getters= {
    allUsers: state=> state.users,
    allPosts: state=> state.posts
}

const actions= {
    async fetchUsers({commit}) {
        const response = await authAxios.get('posts/getall');

        commit('setUsers', response.data);
    },
    async fetchPosts({commit}) {
        const response = await authAxios.get('posts/getall');
        console.log(response);
        commit('setPosts', response.data.data);
    },
    async addPost({commit},model){
        const response = await authAxios.post('posts',model);

        commit('setPosts', response.data.data);
    },
    async deletePost({commit},postId)
    {
        const response = await authAxios.delete(`posts/${postId}`);

        commit('setPosts', response.data.data);
    },
    async loginUser(_,model){
        const response = await axios.post('http://localhost:5000/auth/login', model);
        
        return response;
    },
    async registerUser(_, model)
    {
        const response= await axios.post('http://localhost:5000/auth/register',model);
        return response;
    }
}

const mutations= {
    setUsers: (state, users) => (state.users=users),
    setPosts: (state, posts) => (state.posts=posts),
    setUserPosts: (state,userId) => (state.posts = state.posts.filter(post => post.userId === userId)),
    newPost: (state,post) => state.posts.unshift(post),
    removePost: (state,id) => (state.posts = state.posts.filter(post => post.id !== id))
}

export default{
    state,
    getters,
    actions,
    mutations
}