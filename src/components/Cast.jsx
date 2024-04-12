import "./Cast.css";
// import splash1 from "./SVG/splash1.svg";

const Cast = ({ cast }) => {
  if (cast) {
    return (
      <>
        {cast.map((actor) => {
          return (
            <div key={actor.id} className="cast-wrapper">
              <h3>{actor.name}</h3>
              <div className="cast-img-wrapper">
                <img
                  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${actor.profile_path}`}
                  alt={actor.character}
                ></img>
              </div>
              <div className="cast-as">as</div>
              <h3>{actor.character}</h3>
            </div>
          );
        })}
      </>
    );
  }
  return null;
};

export default Cast;
