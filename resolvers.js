const Post = require('./models/Post.model');

const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World';
        },
        naeem: () => {
            return 5000;
        },
        getAllPosts: async () => {
            return posts = await Post.find();

        },
        getPost: async (_parent, { id }, _context, _info) => {

            return await Post.findById(id);
        },
    },


    Mutation: {
        createPost: async (parent, args, context, info) => {

            const { firstName, lastName, email, password, confirmPassword } = args.post;
            const post = new Post({ firstName, lastName, email, password, confirmPassword });
            await post.save();
            return post;
        },
        deletePost: async (parent, args, context, info) => {
            const { id } = args;
            await Post.findByIdAndDelete(id);
            return "Ok, Post Deleted Successfully";

        },
        updatePost: async (parent, args, context, info) => {
            const { id } = args;
            const { firstName, lastName, email, password, confirmPassword } = args.post;
            const updates={}
            if (firstName!==undefined){
                updates.firstName=firstName;
            }
            
            if (lastName!==undefined){
                updates.lastName=lastName;
            }

            if (email!==undefined){
                updates.email=email;
            }

            if (password!==undefined){
                updates.password=password;
            }

            if (confirmPassword!==undefined){
                updates.confirmPassword=confirmPassword;
            }


            const post = await Post.findByIdAndUpdate(id, updates, { new: true });
            return Post;
        },
    },
};

module.exports = resolvers;