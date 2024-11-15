import { useState } from "react";
import Logo from "./logo";
import MovieSearch from "./MovieSearch";
import ResultCount from "./ResultCount";
function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

export default NavBar;
