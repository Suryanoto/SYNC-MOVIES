import { PlayArrow } from "@material-ui/icons";
import { useState } from "react";
import { useLocation } from "react-router";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./singlePage.css";

export default function SinglePage() {
  const location = useLocation();
  const title = location.pathname.split("/")[2]; //how to direct to post._id

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toggleBallLight, setToggleBallLight] = useState(false);

  return (
    <div className="singlePage">
      <Topbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        toggleBallLight={toggleBallLight}
        setToggleBallLight={setToggleBallLight}
      />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={"singlePageContainer " + (toggleBallLight && "light")}>
        <h1 className={"singlePageTitle " + (toggleBallLight && "light")}>
          {title}
        </h1>
        <div className="singlePageWrapper">
          <div className="singlePageVideo"></div>
          <PlayArrow
            style={{
              fontSize: "100px",
              position: "absolute",
              color: "white",
            }}
            className="singlePageStart"
          />
        </div>
      </div>
    </div>
  );
}
