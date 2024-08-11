import "./styles.css";
import { PostCard } from "../PostCard/index";

export const Posts = (props) => {
  const { posts } = props;
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};
