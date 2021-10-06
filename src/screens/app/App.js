import { useState } from "react";
import { Container } from "react-bootstrap";

import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import HomeScreen from "../homeScreen/HomeScreen";
import "./_app.scss";
function App() {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container ">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container className="app_main " fluid>
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
