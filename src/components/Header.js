import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "../utils/toggleSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import SearchResults from "./SearchResults";
import { addItem, clearItems } from "../utils/searchSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const searchItems = useSelector((store) => store.search.items);
  const handleClick = () => {
    dispatch(toggleState());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!searchItems.includes(searchText)) fetchData();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    setSearchResults(json[1]);
  };
  const onSeach = (e) => {
    setSearchText(e.target.value);
    dispatch(addItem(searchText));
  };
  const handleSearchClick = () => {
    dispatch(clearItems());
  };
  return (
    <div className=" p-4 m-2 shadow-lg items-center grid grid-flow-col ">
      <div className="col-span-1 flex flex-row items-center ">
        <img
          onClick={() => handleClick()}
          alt="toggle-icon"
          className="h-8"
          src="https://www.citypng.com/public/uploads/preview/hd-black-menu-burger-icon-transparent-background-31634946207uno2yrzogi.png"
        />
        <img
          alt="youtube icon"
          className="h-12 pl-5"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
        />
      </div>

      <div className="col-span-10 items-center ml-60 mb-10 ">
        <div className=" absolute  ">
          <div>
            <input
              className="border border-gray-400 p-2 w-96 rounded-l-3xl "
              type="text"
              value={searchText}
              onChange={(e) => {
                onSeach(e);
              }}
              onBlur={() => setSearchResults([])}
            />
            <button
              className="border border-gray-400 rounded-r-3xl p-2"
              onClick={() =>{ handleSearchClick();
                const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )}}
            >
              🔍
            </button>
          </div>
          <div className="relative   bg-white w-[36rem] boorder border-gray-300">
            {searchResults?.map((s, i) => (
              <SearchResults id={i} text={s} />
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-1 w-12">
        <img
          alt="user icon"
          className="w-6"
          src="https://upload.wikimedia.org/wikipedia/commons/9/96/User_icon-cp.png"
        />
      </div>
    </div>
  );
};

export default Header;
