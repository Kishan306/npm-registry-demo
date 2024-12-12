import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 border-b h-20">
      <div className="flex items-center space-x-2 text-sm">
        <Link to="/" className="text-lg font-bold">
          NPM Registry
        </Link>
      </div>
      <div className="w-2/3 lg:w-full max-w-xl ml-4">
        <SearchInput />
      </div>
    </div>
  );
}
