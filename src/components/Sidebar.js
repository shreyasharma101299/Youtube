import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const subs = useSelector((store) => store.toggle.open);
  if (subs == false) return null;
  return (
    <div className="shadow-md min-w-fit ">
      <ul className="border border-b  px-16 py-4">
        <Link to="/">
          <li className="p-2">Home</li>
        </Link>
        <li className="p-2">Shorts</li>
        <li className="p-2">Subscription</li>
      </ul>

      <ul className="border border-b  px-16 py-4">
        <li className="p-2">Library</li>
        <li className="p-2">History</li>
        <li className="p-2">Your Videos</li>
        <li className="p-2">Watched Videos</li>
        <li className="p-2">Liked Videos</li>
      </ul>
      <div className="px-16 py-4 font-bold">Subscriptions</div>
      <ul className="px-16 py-4">
        <li className="p-2">Fit Tuber</li>
        <li className="p-2">RGV Love</li>
        <li className="p-2">Harry Styles</li>
      </ul>
      <div className="px-16 py-4 font-bold">Explore</div>
      <ul className="px-16 py-4">
        <li className="p-2">Trending</li>
        <li className="p-2">Shopping</li>
        <li className="p-2">Musics</li>
      </ul>
    </div>
  );
};

export default Sidebar;
