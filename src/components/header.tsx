import { SearchBar } from "./search-bar";
import { Drawer } from "./drawer";

export function Header() {
  return (
    <>
      <header className="p-7 md:p-0 flex items-center justify-between space-x-4">
        <div>
          <h1 className="text-xl md:text-4xl font-bold text-[#ff5724]">
            <span className="text-[#F8C100]">Food</span>
            Health
          </h1>
          <p className="text-sm md:text-xl text-black">
            What do you want to eat today?
          </p>
        </div>

        <SearchBar className="flex-1" />

        <Drawer />
      </header>
    </>
  );
}
