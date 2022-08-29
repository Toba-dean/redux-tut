import { useSelector } from "react-redux"
import { selectAllPosts, postAdded } from "./postSlice";

export const PostList = () => {

  const posts = useSelector(selectAllPosts);

  return (
    <section>
      <h2>Post</h2>
      {
        posts.map(post => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
          </article>
        ))
      }
    </section>
  )
}
