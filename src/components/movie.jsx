import { forwardRef } from "react";
import "./Movie.css";
import { motion } from "framer-motion";

const Movie = forwardRef(({ movieInfo, setFocusedMovie }, ref) => {
  function clickHandler() {
    setFocusedMovie(movieInfo);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.4 }}
      layoutId={movieInfo.id}
      onClick={clickHandler}
      className={"movie-wrapper"}
    >
      <div className="vote">{movieInfo.vote_average}</div>

      <img
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieInfo.poster_path}`}
        alt={movieInfo.original_title}
      />
    </motion.div>
  );
});

export default Movie;
