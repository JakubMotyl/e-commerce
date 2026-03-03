"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { GoPlus } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";

interface ShopFiltersProps {
  setSortProducts: Dispatch<SetStateAction<string>>;
  sortProducts: string;
}

function ShopFilters({
  setSortProducts,
  sortProducts,
}: ShopFiltersProps) {
  const [openSortMenu, setOpenSortMenu] = useState<boolean>(false);

  return (
    <section className="flex items-center justify-between text-pure-black md:text-sm text-xs font-medium">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-0.5 cursor-pointer">
          <GoPlus className="cursor-pointer" />
          <span>Filters</span>
        </div>
        <button className="reset-btn" onClick={() => setSortProducts('Default')}>Reset all</button>
      </div>
      <div
        className="flex items-center gap-2 relative group cursor-pointer"
        onClick={() => setOpenSortMenu((prev) => !prev)}
      >
        <p>Sort by:</p>
        <div className="flex items-center gap-0.5">
          <span className="md:inline-block hidden">{sortProducts}</span>
          <MdKeyboardArrowDown className="cursor-pointer" />
        </div>

        {/* Sort by content md+ devices */}
        <div
          className="group-hover:opacity-100 group-hover:visible invisible opacity-0 z-50 absolute right-0 top-full bg-white p-6 border border-terracotta w-60
        md:flex hidden flex-col gap-4"
        >
          <div className="sort-el" onClick={() => setSortProducts("Default")}>
            <input
              type="radio"
              className="checkbox"
              id="default"
              name="sortEl"
            />
            <label htmlFor="default" className="sort-name">
              Default
            </label>
          </div>
          <div
            className="sort-el"
            onClick={() => setSortProducts("Price - low to high")}
          >
            <input
              type="radio"
              className="checkbox"
              id="lowToHigh"
              name="sortEl"
            />
            <label htmlFor="lowToHigh" className="sort-name">
              Price - low to high
            </label>
          </div>
          <div
            className="sort-el"
            onClick={() => setSortProducts("Price - high to low")}
          >
            <input
              type="radio"
              className="checkbox"
              id="highToLow"
              name="sortEl"
            />
            <label htmlFor="highToLow" className="sort-name">
              Price - high to low
            </label>
          </div>
        </div>

        {/* Sort by content md- devices */}
        <div
          className={`${openSortMenu ? "opacity-100 visible" : "opacity-0 invisible"} md:hidden z-50 absolute right-0 top-full h-fit bg-white py-6 px-3 w-45 border border-terracotta
        flex flex-col gap-4`}
        >
          <div className="sort-el" onClick={() => setSortProducts("Default")}>
            <input
              type="radio"
              className="checkbox"
              id="default"
              name="sortEl"
            />
            <label htmlFor="default" className="sort-name">
              Default
            </label>
          </div>
          <div
            className="sort-el"
            onClick={() => setSortProducts("Price - low to high")}
          >
            <input
              type="radio"
              className="checkbox"
              id="lowToHigh"
              name="sortEl"
            />
            <label htmlFor="lowToHigh" className="sort-name">
              Price - low to high
            </label>
          </div>
          <div
            className="sort-el"
            onClick={() => setSortProducts("Price - high to low")}
          >
            <input
              type="radio"
              className="checkbox"
              id="highToLow"
              name="sortEl"
            />
            <label htmlFor="highToLow" className="sort-name">
              Price - high to low
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopFilters;
