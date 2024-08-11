import "./styles.css";

export const PostCard = (props) => {
  const { post } = props;
  return (
    <div className="post">
      <img src={post.photo} alt={post.title} />
      <div className="post-content">
        <div className="id">
          <h2>{post.id}</h2>
        </div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
};
