import { Link } from "react-router-dom";

import PostAsyncAuthor from "./PostAsyncAuthor";
import Reaction from "../Post/Reaction";
import TimeAgo from "../Post/TimeAgo";

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.body.substring(0, 100)}</p>
      <Link to={`post/${post.id}`}>
        View Post
      </Link>

      <p className="postCredit">
        <PostAsyncAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>

      <Reaction post={post} />
    </article>
  )
}
export default PostsExcerpt