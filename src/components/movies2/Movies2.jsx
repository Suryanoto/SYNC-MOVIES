import { Link } from "react-router-dom";
import "./movies2.css";

export default function Movies() {
  return (
    <div className="movies2" id="movies2">
      <div className="movies2Container">
        <div className="movies2ImgContainer">
          <div className="featuredMovies2">
            <img src="assets/f-t-2.png" alt="" className="movies2Logo" />
            <h4 className="movies2Desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores nostrum explicabo autem adipisci eum.
            </h4>
            <Link
              to={{
                pathname: `/movie/DARK`,
              }}
              className="link"
            >
              <button className="movies2Button">Watch</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
