const {gql}=require('apollo-server-express');



const typeDefs=gql `

type Post{
    id:ID
    firstName: String
    lastName: String
    email: String
    password: String
    confirmPassword: String
}


type Query {
    hello:String
    naeem:Int

    getAllPosts:[Post]
    getPost(id: ID): Post
}

input PostInput{
    
    firstName: String
    lastName: String
    email: String
    password: String
    confirmPassword: String
}

type Mutation{
    createPost(post:PostInput):Post
    deletePost(id:ID): String
    updatePost(id:ID, post:PostInput): Post


}



`;


module.exports=typeDefs;