const mongoose=require('mongoose');
// const {values}=require('../asset-manage/pages/components/Signup');

const PostSchema=new mongoose.Schema({

    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    confirmPassword:{
        type: String,
    },

    // title:{
    //     type: String,
    //     required: true,
    // },
    // description:
    // {
    //     type: String,
    // },
    
});

// const PostSchema=new mongoose.Schema({ values });

const Post=mongoose.model('post', PostSchema);
module.exports=Post;