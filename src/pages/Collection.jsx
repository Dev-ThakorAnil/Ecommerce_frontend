import { useContext, useEffect, useState } from "react";
import { ShopeContext } from "../context/ShopeContext";
import { assets } from "../assets/assets";
import ProductsItems from "../components/ProductsItems";
import Title from "../components/Title";

export default function Collection() {
  const { products, search } = useContext(ShopeContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const sortProduct = (productsToSort) => {
    let sorted = [...productsToSort];
    switch (sortType) {
      case "low-high":
        return sorted.sort((a, b) => a.price - b.price);
      case "high-low":
        return sorted.sort((a, b) => b.price - a.price);
      default:
        return sorted;
    }
  };
  useEffect(() => {
    let result = [...products];
    // Search filter
    if (search && search.trim() !== "") {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    //  Category filter
    if (category.length > 0) {
      result = result.filter((item) =>
        category.includes(item.category.toLowerCase())
      );
    }
    //  Subcategory filter
    if (subcategory.length > 0) {
      result = result.filter((item) => subcategory.includes(item.subCategory));
    }
    const sortedResult = sortProduct(result);
    setFilteredProducts(sortedResult);
  }, [products, search, category, subcategory, sortType]); //  Added `search` to deps
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-4 sm:px-8">
      {/* Filters */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTER
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden transition-transform duration-300 ${
              showFilter ? "rotate-90" : ""
            }`}
            alt=""
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["men", "women", "kids"].map((cat) => (
              <label key={cat} className="flex gap-2 items-center">
                <input
                  className="w-3"
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                />
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </label>
            ))}
          </div>
        </div>
        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
              <label key={type} className="flex gap-2 items-center">
                <input
                  className="w-3"
                  type="checkbox"
                  value={type}
                  onChange={toggleSubCategory}
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>
      {/* Products */}
      <div className="flex-1">
        <div className="flex justify-between  mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select
            className="border-2 border-gray-300 text-sm px-2"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item, index) => (
            <ProductsItems
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
          {filteredProducts.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
