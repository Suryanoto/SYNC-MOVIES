import "./home.css";
import Movies from "../../components/movies/Movies";
import Topbar from "../../components/topbar/Topbar";
import Popular from "../../components/popular/Popular";
import Series from "../../components/series/Series";
import Upcoming from "../../components/upcoming/Upcoming";
import Movies2 from "../../components/movies2/Movies2";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toggleBallLight, setToggleBallLight] = useState(false);

  return (
    <div className="home">
      <Topbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        toggleBallLight={toggleBallLight}
        setToggleBallLight={setToggleBallLight}
      />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="homeContainer">
        <Movies />
        <Popular
          toggleBallLight={toggleBallLight}
          setToggleBallLight={setToggleBallLight}
        />
        <Series
          toggleBallLight={toggleBallLight}
          setToggleBallLight={setToggleBallLight}
        />
        <Movies2 />
        <Upcoming
          toggleBallLight={toggleBallLight}
          setToggleBallLight={setToggleBallLight}
        />
      </div>
    </div>
  );
}
