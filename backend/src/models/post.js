import connection from '../db/mongoose.js';


const PostSchema = new connection.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    imageLink: {
        type: String,
        required: false,
    },
    tags: {
        type: Array,
        required: false,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    autor: {
        type: String,
        required: false,
    }
});

const Post = connection.model('Post', PostSchema);

export default Post;