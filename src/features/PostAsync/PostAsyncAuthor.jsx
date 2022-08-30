import { useSelector } from "react-redux";
import { selectAllUsersAsync } from "../users/userAsyncSlice";

const PostAsyncAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsersAsync)

  const author = users.find(user => user.id === userId);

  return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAsyncAuthor