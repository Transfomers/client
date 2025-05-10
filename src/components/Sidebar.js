import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-52 h-full bg-[#3aaa35] text-white flex flex-col shadow-lg">
      <h2 className="text-xl font-bold p-4 border-b border-white text-center tracking-wide">
        <NavLink to="/admin" className={({ isActive }) => isActive}>
          ITC Santé Admin
        </NavLink>
      </h2>
      <nav className="flex flex-col p-4 space-y-2 text-sm">
        <NavLink
          to="/createarticle"
          className={({ isActive }) =>
            isActive
              ? "bg-[#ffed00] text-[#3aaa35] font-semibold p-2 rounded transition"
              : "p-2 rounded hover:bg-white hover:text-[#3aaa35] transition"
          }
        >
          ➕ Create an Article
        </NavLink>
        <NavLink
          to="/articlelist"
          className={({ isActive }) =>
            isActive
              ? "bg-[#ffed00] text-[#3aaa35] font-semibold p-2 rounded transition"
              : "p-2 rounded hover:bg-white hover:text-[#3aaa35] transition"
          }
        >
          📄 Article List
        </NavLink>
        <NavLink
          to="/Blog"
          className={({ isActive }) =>
            isActive
              ? "bg-[#ffed00] text-[#3aaa35] font-semibold p-2 rounded transition"
              : "p-2 rounded hover:bg-white hover:text-[#3aaa35] transition"
          }
        >
          📄 Blog Articles
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
