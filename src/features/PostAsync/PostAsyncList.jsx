import { useSelector } from "react-redux";

import { selectAllPosts, selectError, selectStatus } from "./postAsyncSlice";
import PostsExcerpt from "./PostAsyncExcept";

export const PostAsyncList = () => {

  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(selectStatus);
  const postError = useSelector(selectError);

  let content;
  if (postStatus === 'loading') {
    content = <p>"Loading..."</p>;
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
  } else if (postStatus === 'failed') {
    content = <p>{postError}</p>;
  }

  return (
    <section>
      {/* <h2>Post</h2> */}
      {content}
    </section>
  )
}
