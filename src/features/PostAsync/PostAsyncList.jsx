import { useSelector } from "react-redux";

import { selectPostIds, selectError, selectStatus } from "./postAsyncSlice";
import PostsExcerpt from "./PostAsyncExcept";

export const PostAsyncList = () => {

  const orderedPostIds = useSelector(selectPostIds);
  const postStatus = useSelector(selectStatus);
  const postError = useSelector(selectError);

  let content;
  if (postStatus === 'loading') {
    content = <p>"Loading..."</p>;
  } else if (postStatus === 'succeeded') {
    content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
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
