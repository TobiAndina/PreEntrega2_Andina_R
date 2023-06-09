import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1> Chamalai Surfboards</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to={`/categoria/2`}><strong>ShortBoards</strong></NavLink>
          </li>

          <li>
            <NavLink to={`/categoria/3`}><strong>LongBoards</strong></NavLink>
          </li>

          <li>
            <NavLink to={`/categoria/4`}><strong>Hybrid</strong></NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget />

    </header>
  )
}

export default NavBar