import { ArrowBackIos } from "@material-ui/icons";
import { useState } from "react";
import "./popular.css";
import { popularMovies } from "../../data";
import { Link } from "react-router-dom";

export default function Popular({ toggleBallLight }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "right"
      ? setCurrentSlide(
          currentSlide < popularMovies.length - 4 ? currentSlide + 1 : 0
        )
      : setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4);
  };

  return (
    <div className={"popular " + (toggleBallLight && "light")} id="popular">
      <h1 className={"popularText " + (toggleBallLight && "light")}>
        Popular Movies
      </h1>
      <div
        className="popularContainer"
        style={{
          transform: `translateX(-${currentSlide * 360}px)`,
        }}
      >
        <div className="popularMovies">
          {popularMovies.map((d) => (
            <div key={d.id} className="popularMoviesContainer">
              <img src={d.img} alt="" className="popularImg" />
              <h3 className="popularTitle">{d.title}</h3>
              <h4 className="popularDesc">{d.Desc}</h4>
              <Link
                to={{
                  pathname: `/movie/${d.title}`,
                }}
                className="link"
              >
                <button className="popularButton">{d.Button}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <ArrowBackIos
        className="popularArrow"
        style={{ fontSize: "120px" }}
        onClick={() => handleClick("right")}
      />
      <ArrowBackIos
        className="popularArrow2"
        style={{ fontSize: "120px" }}
        onClick={() => handleClick()}
      />
    </div>
  );
}
