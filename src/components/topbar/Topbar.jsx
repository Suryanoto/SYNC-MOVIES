import { Brightness2, Brightness5, Menu, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar({
  sidebarOpen,
  setSidebarOpen,
  toggleBallLight,
  setToggleBallLight,
}) {
  return (
    <div className="topbar">
      <div className="topbarContainer">
        <div className="leftContainer">
          <div className="sidebarMenuContainer">
            <Menu
              style={{ fontSize: "35px", cursor: "pointer" }}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
          </div>
          <Link to="/" className="link">
            <h1 className="logoName">SYNC MOVIES</h1>
          </Link>
          <div className="searchContainer">
            <input placeholder="Search Movies" className="search" />
            <Search
              style={{
                right: "5px",
              }}
            />
          </div>
        </div>
        <div className="centerContainer">
          <ul className="list">
            <li className="listItem">
              <a className="listRef" href="#movies">
                Movies
              </a>
            </li>
            <li className="listItem">
              <a className="listRef" href="#popular">
                Popular
              </a>
            </li>
            <li className="listItem">
              <a className="listRef" href="#series">
                Series
              </a>
            </li>
            <li className="listItem">
              <a className="listRef" href="#upcoming">
                Upcoming
              </a>
            </li>
          </ul>
        </div>
        <div className="rightContainer">
          <a href="http://suryanone.my.id/" className="imageProfileContainer">
            <img
              src="/assets/profileSurya.png"
              alt=""
              className="imageProfile"
            />
          </a>
          <div className="toggle">
            <Brightness2 style={{ marginRight: "5px", fontSize: "24px" }} />
            <Brightness5 style={{ fontSize: "24px" }} />
            <div
              className={"toggleBall " + (toggleBallLight && "light")}
              onClick={() => setToggleBallLight(!toggleBallLight)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
