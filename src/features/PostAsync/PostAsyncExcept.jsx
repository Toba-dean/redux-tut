import PostAsyncAuthor from "./PostAsyncAuthor";
import Reaction from "../Post/Reaction";
import TimeAgo from "../Post/TimeAgo";

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>

      <p className="postCredit">
        <PostAsyncAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>

      <Reaction post={post} />
    </article>
  )
}
export default PostsExcerpt