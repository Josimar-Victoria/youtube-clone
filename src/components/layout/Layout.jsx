import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "./_layout.scss";
const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="layout_container ">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container className="layout_main " fluid>
          {children}
        </Container>
      </div>
    </>
  );
};

export default Layout;
