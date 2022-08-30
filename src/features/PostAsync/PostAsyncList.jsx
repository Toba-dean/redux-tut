import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { selectAllPosts, selectError, selectStatus, fetchPosts } from "./postAsyncSlice";
import PostsExcerpt from "./PostAsyncExcept";

export const PostAsyncList = () => {

  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(selectStatus);
  const postError = useSelector(selectError);
  const dispatch = useDispatch();


  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])
  
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
      <h2>Post</h2>
      {content}
    </section>
  )
}
