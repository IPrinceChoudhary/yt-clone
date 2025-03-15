import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store)=> store.search)

  // debouncing // it will call api request after 300 seconds if the keypress difference is > 300s else it will cancel the api
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[query]) { // searchCache will look something like this in store :- searchCache = {"iPhone": ["iphone 15", "iphone Pro Max"]}
        // if it is present in my cache don't make an api call directly set the suggestions
        setSuggestions(searchCache[query]);
      } else {
        getSearchQuery();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const getSearchQuery = async () => {
    console.log("API_CALL - ", query);
    const data = await fetch(YOUTUBE_SEARCH_API + query);
    const res = await data.json();
    setSuggestions(res[1]);

    // update in cache
    dispatch(cacheResults({
      [query] : res[1]
    }))
  };

  const dispatch = useDispatch();

  function toggleHamHandler() {
    dispatch(toggleMenu());
  }

  return (
    <header className="grid p-5 shadow-md text-center content-center place-items-center grid-cols-5">
      <section className="grid grid-flow-col place-items-center col-span-1 justify-self-start">
        <img
          className="h-10 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="hamburger"
          onClick={() => toggleHamHandler()}
        />
        <img
          className="h-14"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt="youtube logo"
        />
      </section>
      <section className="relative col-span-3 grid grid-flow-col items-center">
        <input
          className="border w-md h-10 px-2 outline-none rounded-l-full"
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border h-10 px-5 rounded-r-full bg-gray-200 cursor-pointer">
          🔍
        </button>
        {showSuggestions && suggestions.length > 0 ? (
          <div className="absolute top-10 bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="px-1 border-b border-gray-200 hover:bg-gray-100 text-left h-7"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>
      <section className="place-items-center col-span-1">
        <img
          className="h-10"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user icon"
        />
      </section>
    </header>
  );
};
export default Header;
