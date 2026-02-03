import { GoPlus } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";

function ShopFilters() {
  return (
    <section className="flex items-center justify-between text-pure-black md:text-sm text-xs font-medium">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-0.5 group">
          <GoPlus className="cursor-pointer" />
          <span>Filters</span>
        </div>
        <button className="reset-btn">Reset all</button>
      </div>
      <div className="flex items-center gap-2 group">
        <p>Sort by:</p>
        <div className="flex items-center gap-0.5">
          <span>Default</span>
          <MdKeyboardArrowDown className="cursor-pointer" />
        </div>
      </div>
    </section>
  );
}

export default ShopFilters;
