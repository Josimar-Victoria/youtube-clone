import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useHistory } from "react-router";
import "./_header.scss";
import { Link } from "react-router-dom";
export default function Header({ handleToggleSidebar }) {
  const [input, setInput] = useState("");

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`search/${input}`);
  }

  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="logo"
          className="header__logo"
        />
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
      </div>
    </div>
  );
}
