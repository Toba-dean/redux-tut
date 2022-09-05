import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import PostAsyncAuthor from "./PostAsyncAuthor";
import Reaction from "../Post/Reaction";
import TimeAgo from "../Post/TimeAgo";
import { selectPostById } from "./postAsyncSlice";

const PostsExcerpt = ({ postId }) => {

  const post = useSelector(state => selectPostById(state, postId))

  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.body.substring(0, 100)}</p>

      <p className="postCredit">
        <Link to={`post/${post.id}`}>
          View Post
        </Link>
        <PostAsyncAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>

      <Reaction post={post} />
    </article>
  )
}
export default PostsExcerpt