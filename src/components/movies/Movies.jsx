import { Link } from "react-router-dom";
import "./movies.css";

export default function Movies() {
  return (
    <div className="movies" id="movies">
      <div className="moviesContainer">
        <div className="moviesImgContainer">
          <div className="featuredMovies">
            <img src="assets/f-t-1.png" alt="" className="moviesLogo" />
            <h4 className="moviesDesc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores nostrum explicabo autem adipisci eum.
            </h4>
            <Link
              to={{
                pathname: `/movie/DJANGO`,
              }}
              className="link"
            >
              <button className="moviesButton">Watch</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
