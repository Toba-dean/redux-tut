import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { selectPostById } from "./postAsyncSlice";
import TimeAgo from "../Post/TimeAgo";
import Reaction from "../Post/Reaction";
import PostAsyncAuthor from "./PostAsyncAuthor";

export const SinglePost = () => {

  const { postId } = useParams();
  const post = useSelector(state => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>No post found.</h2>
      </section>
    )
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <p className="postCredit">
        <PostAsyncAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>

      <Reaction post={post} />
    </article>
  )
}
