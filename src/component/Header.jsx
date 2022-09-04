import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="Header">
      <h2>Redux Blog</h2>

      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'post'}>Post</Link></li>
        </ul>
      </nav>
    </header>
  )
}
