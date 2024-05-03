import clsx from "clsx";

import { SearchIcon } from "./icons";

interface SearchBarProps {
  className?: string;
  inputClassName?: string;
}

export function SearchBar({
  className = "",
  inputClassName = "",
}: SearchBarProps) {
  return (
    <div className={clsx("relative hidden md:block", className)}>
      <input
        type="text"
        id="search-navbar"
        className={clsx(
          "block w-full py-4 px-7 text-lg text-gray-400 shadow bg-white rounded-full outline-none",
          inputClassName
        )}
        placeholder="Search"
      />
      <div className="absolute inset-y-0 end-0 flex items-center pe-7 pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <span className="sr-only">Search icon</span>
      </div>
    </div>
  );
}
