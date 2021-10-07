import React from "react";
import "./_sidebar.scss";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Sidebar({ sidebar, handleToggleSidebar }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handlerLogOut = () => {
    dispatch(log_out());
    history.push("/login");
  };
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <Link to="/">
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
      </Link>
      <Link to="/feed/subscriptions">
        <li>
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
        </li>
      </Link>
      <Link to="#">
        <li>
          <MdThumbUp size={23} />
          <span>Liked Video</span>
        </li>
      </Link>

      <Link to="#">
        <li>
          <MdHistory size={23} />
          <span>History</span>
        </li>
      </Link>
      <Link to="#">
        <li>
          <MdLibraryBooks size={23} />
          <span>Library</span>
        </li>
      </Link>
      <Link to="#">
        <li>
          <MdSentimentDissatisfied size={23} />
          <span>I don't Know</span>
        </li>
      </Link>

      <hr />

      <li onClick={handlerLogOut}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>

      <hr />
    </nav>
  );
}
