// A simple component that renders the app header and accepts a title prop

import { Searchbar } from "./../Search/Search";
import "./Header.css";

export const Header = (params) => {
  return (
    <>
      <div className="HeaderContainer">
        <h2 className="HeaderLogo">Final Project Hacktiv8</h2>

        <Searchbar setSearchQuery={params.setSearchQuery} />
      </div>
    </>
  );
};
