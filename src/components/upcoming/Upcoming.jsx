import { ArrowBackIos } from "@material-ui/icons";
import { useState } from "react";
import "./upcoming.css";
import { upcomingMovies } from "../../data";
import { Link } from "react-router-dom";

export default function Upcoming({ toggleBallLight }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "right"
      ? setCurrentSlide(
          currentSlide < upcomingMovies.length - 1 ? currentSlide + 1 : 0
        )
      : setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1);
  };

  return (
    <div className={"upcoming " + (toggleBallLight && "light")} id="upcoming">
      <h1 className={"upcomingText " + (toggleBallLight && "light")}>
        Upcoming Movies
      </h1>
      <div
        className="upcomingContainer"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="upcomingMovies">
          {upcomingMovies.map((d) => (
            <div key={d.id} className="upcomingMoviesContainer">
              <div className="upcomingMoviesLeft">
                <img src={d.img} alt="" className="upcomingMoviesImg" />
              </div>
              <div className="upcomingMoviesRight">
                <h3 className="upcomingMoviesTitle">{d.title}</h3>
                <h4 className="upcomingMoviesDesc">{d.Desc}</h4>
                <Link
                  to={{
                    pathname: `/movie/${d.title}`,
                  }}
                  className="link"
                >
                  <button className="upcomingMoviesButton">{d.Button}</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ArrowBackIos
        className="upcomingArrow"
        style={{ fontSize: "120px" }}
        onClick={() => handleClick("right")}
      />
      <ArrowBackIos
        className="upcomingArrow2"
        style={{ fontSize: "120px" }}
        onClick={() => handleClick()}
      />
    </div>
  );
}
