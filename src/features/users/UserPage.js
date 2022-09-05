import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { selectAsyncUserById } from './userAsyncSlice';
import { selectAllPosts, selectPostsByUser } from '../PostAsync/postAsyncSlice';

const UserPage = () => {
  const { userId } = useParams()
  const user = useSelector(state => selectAsyncUserById(state, Number(userId)))

  const postsForUser = useSelector(state => selectPostsByUser(state, Number(userId)))

  // const postsForUser = useSelector(state => {
  //   let allPost =selectAllPosts(state);
  //   return allPost.filter(post => post.userId === Number(userId))
  // })

  const postTitles = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
      <h2>{user?.name}</h2>

      <ol>{postTitles}</ol>
    </section>
  )
}

export default UserPage