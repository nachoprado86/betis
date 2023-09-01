


const Post = ({ post }) => {
    return (
        <article className="post">
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <p>{post.imageLink}</p>
            <p>{new Date(post.date).toLocaleString()}</p>
            <p>{post.autor}</p>
        </article>

    );
};

export default Post;