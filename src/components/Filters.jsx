import "./Filters.css";
import { useState, useRef, useEffect } from "react";

function Filters({
  setActiveGenre,
  setSearchValue,
  setIsSearching,
  setIsCut,
  setIsSearchCut,
}) {
  const [currentGenre, setCrrentGenre] = useState([1, 0, 0, 0, 0]);
  const [typeValue, setTypeValue] = useState("");
  const searchInput = useRef();

  function eventHandler(e) {
    if (e.key === "Enter" && typeValue === "") {
      setIsSearching(false);
      setSearchValue("");
      return;
    }
    if (e.key === "Enter") {
      setSearchValue(typeValue);
      setIsSearching(true);
    }
  }

  useEffect(() => {
    searchInput.current.addEventListener("keypress", eventHandler);
    return () => {
      searchInput.current.removeEventListener("keypress", eventHandler);
    };
  }, [typeValue]);

  return (
    <>
      <div className="search-input-wrapper">
        <img src="/search-icon.svg" className="search-icon left"></img>
        <div className="search-bar">
          <input
            ref={searchInput}
            type="text"
            className="search-input"
            onChange={(e) => {
              setTypeValue(e.target.value);
            }}
            value={typeValue}
          ></input>
          <img
            src="/erase-icon.svg"
            className={`search-erase ${typeValue ? "" : "hidden"}`}
            onClick={() => {
              setTypeValue("");
              setSearchValue("");
              setIsSearching(false);
            }}
          ></img>
        </div>
        <img src="/copy-icon.svg" className="search-icon right"></img>
      </div>
      <div className="filters-wrapper">
        <button
          onClick={() => {
            setActiveGenre(0);
            setCrrentGenre([1, 0, 0, 0, 0]);
            setIsCut(true);
            setIsSearchCut(false);
          }}
          className={currentGenre[0] ? "filters-btn active" : "filters-btn"}
        >
          All
        </button>
        <button
          onClick={() => {
            setActiveGenre(28);
            setCrrentGenre([0, 1, 0, 0, 0]);
            setIsCut(true);
            setIsSearchCut(true);
          }}
          className={currentGenre[1] ? "filters-btn active" : "filters-btn"}
        >
          Action
        </button>
        <button
          onClick={() => {
            setActiveGenre(35);
            setCrrentGenre([0, 0, 1, 0, 0]);
            setIsCut(true);
            setIsSearchCut(true);
          }}
          className={currentGenre[2] ? "filters-btn active" : "filters-btn"}
        >
          Comedy
        </button>
        <button
          onClick={() => {
            setActiveGenre(18);
            setCrrentGenre([0, 0, 0, 1, 0]);
            setIsCut(true);
            setIsSearchCut(true);
          }}
          className={currentGenre[3] ? "filters-btn active" : "filters-btn"}
        >
          Drama
        </button>
        <button
          onClick={() => {
            setActiveGenre(14);
            setCrrentGenre([0, 0, 0, 0, 1]);
            setIsCut(true);
            setIsSearchCut(true);
          }}
          className={currentGenre[4] ? "filters-btn active" : "filters-btn"}
        >
          Fantasy
        </button>
      </div>
    </>
  );
}

export default Filters;
