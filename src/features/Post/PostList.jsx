import { useSelector } from "react-redux";

import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import Reaction from "./Reaction";

export const PostList = () => {

  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section>
      <h2>Post</h2>
      {
        orderedPosts.map(post => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>

            <p className="postCredit">
              <PostAuthor userId={post.userId} />
              <TimeAgo timestamp={post.date} />
            </p>

            <Reaction post={post} />
          </article>
        ))
      }
    </section>
  )
}
