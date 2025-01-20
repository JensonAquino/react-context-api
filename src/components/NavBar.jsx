import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="mx-3">
              <NavLink to="/">HomaPage</NavLink>
            </li>
            <li className="mx-3">
              <NavLink to="/ChiSiamo">ChiSiamo</NavLink>
            </li>
            <li className="mx-3">
              <NavLink to="/PostList">PostList</NavLink>
            </li>
            <li className="mx-3">
              <NavLink to="/products">products</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar