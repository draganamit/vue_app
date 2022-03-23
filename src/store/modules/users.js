import axios from "axios";

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
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        commit('setUsers', response.data);
    },
    async fetchPosts({commit}) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        commit('setPosts', response.data);
    },
    async addPost({commit},model){
        const response=await axios.post('https://jsonplaceholder.typicode.com/posts',model);

        commit('newPost', response.data);
    },
    async deletePost({commit},postId)
    {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);

        commit('removePost', postId);
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