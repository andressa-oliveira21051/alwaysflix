import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { signInWithGoogle } from "../Firebase";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { TbFiles } from "react-icons/tb";
import { ImYoutube } from "react-icons/im";


const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> AlwaysFlix
        </Link>

      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>      
        
        <Link to="/Login">
          <FaUserCircle /> <h1>{localStorage.getItem("name")}</h1>
        </Link>

        <Link to="/upfiles">
          <TbFiles />
        </Link>

        <Link to="/Parceiros">
          <ImYoutube />
        </Link>

      </form>


    </nav>
  );
};

export default Navbar;
