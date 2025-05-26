import { useContext } from "react";
import { ShopeContext } from "../context/ShopeContext";
import { assets } from "../assets/assets";

export default function SearchBar() {
  const { search, setSearch, ShowSearch, setShowSearch } = useContext(ShopeContext);

  return ShowSearch ? (
    <div className="border-t border-b bg-gray-50 py-4 text-center relative z-10">
      <div className="inline-flex items-center justify-between border border-gray-400 px-4 py-2 mx-3 rounded-full w-11/12 sm:w-1/3 bg-white shadow-sm">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-transparent text-sm"
          type="text"
          placeholder="Search products..."
          aria-label="Search products"
        />
        <img src={assets.search_icon} className="w-4 mr-2" alt="Search" />
        <img
          onClick={() => {
            setShowSearch(false);
            setSearch("");
          }}
          className="w-3 cursor-pointer"
          src={assets.cross_icon}
          alt="Close search"
        />
      </div>
    </div>
  ) : null;
}
