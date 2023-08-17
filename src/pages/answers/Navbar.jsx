import React, { useState } from "react";
import "./Navbar.scss";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 0, title: "Showcase", href: "/showcase" },
    { id: 1, title: "Docs", href: "/docs" },
    { id: 2, title: "Blog", href: "/blog" },
    { id: 3, title: "Analytics", href: "/analytics" },
    { id: 4, title: "Templates", href: "/templates" },
    { id: 5, title: "Enterprise", href: "/enterprise" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div
        className={`hamburger-container ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <img src="hamburger.svg" alt="Mobile Menu" className="hamburger-icon" />
      </div>
      <div className={`aeon-container ${menuOpen ? "open" : ""}`}>
        <div className={`aeon-text ${menuOpen ? "open" : ""}`}>AEON</div>
        {menuOpen && (
          <div className="icon-container">
            <img src="search.svg" alt="search" className="search-icon" />
            <img
              src="close.svg"
              alt="close"
              className="close-icon"
              onClick={toggleMenu}
            />
          </div>
        )}
      </div>
      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="searchBox-container">
        <input type="text" placeholder="Search documentation..." />
      </div>
    </nav>
  );
}
