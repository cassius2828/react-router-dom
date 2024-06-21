import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemon">Pokemon</Link>
        </li>
        <li>
          <Link to="/pokemon/new">Create Pokemon</Link>
        </li>
        <li>
          <Link to="/pokemon/:pokemonId">Pokemon Details</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
