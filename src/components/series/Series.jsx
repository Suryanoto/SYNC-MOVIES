import { ArrowBackIos } from "@material-ui/icons";
import { useState } from "react";
import "./series.css";
import { seriesMovies } from "../../data";
import { Link } from "react-router-dom";

export default function Series({ toggleBallLight }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "right"
      ? setCurrentSlide(
          currentSlide < seriesMovies.length - 2 ? currentSlide + 1 : 0
        )
      : setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2);
  };

  return (
    <div className={"series " + (toggleBallLight && "light")} id="series">
      <h1 className={"seriesText " + (toggleBallLight && "light")}>
        Series Movies
      </h1>
      <div
        className="seriesContainer"
        style={{ transform: `translateX(-${currentSlide * 720}px)` }}
      >
        <div className="seriesMovies">
          {seriesMovies.map((d) => (
            <div key={d.id} className="seriesMoviesContainer">
              <img src={d.img} alt="" className="seriesImg" />
              <h3 className="seriesTitle">{d.title}</h3>
              <h4 className="seriesDesc">{d.Desc}</h4>
              <Link
                to={{
                  pathname: `/movie/${d.title}`,
                }}
                className="link"
              >
                <button className="seriesButton">{d.Button}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <ArrowBackIos
        className="popularArrowSeries"
        style={{ fontSize: "120px" }}
        onClick={() => handleClick("right")}
      />
      <ArrowBackIos
        className="popularArrow2Series"
        style={{ fontSize: "120px" }}
        onClick={() => handleClick()}
      />
    </div>
  );
}
