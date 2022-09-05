import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getCount, increaseCount } from "../features/PostAsync/postAsyncSlice";

export const Header = () => {

  const dispatch = useDispatch();
  const count = useSelector(getCount);

  return (
    <header className="Header">
      <h2>Redux Blog</h2>

      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'post'}>Post</Link></li>
          <li><Link to={'user'}>User</Link></li>
        </ul>

        <button onClick={() => dispatch(increaseCount())}>
          {count}
        </button>
      </nav>
    </header>
  )
}
