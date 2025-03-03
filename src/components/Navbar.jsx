import { Link, NavLink } from "react-router-dom";

import { UserRound } from "lucide-react";
import { Search } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

import classes from "./Navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [isOn, setIsOn] = useState(false);
  console.log("isOn", isOn);

  return (
    <div className="font-albert static top-0 w-full mx-auto h-16 text-black items-center bg-white shadow-sm content-center">
      <div className=" font-bold uppercase flex justify-between flex-row items-center ">
        <Link className="" to="/">
          <h1>LogoLogo</h1>
        </Link>
        <div
          className={`md:static absolute md:min-h-fit min-h-screen left-0 top-[64px] md:w-auto w-64 bg-white p-5 transition-all duration-300 ${
            isOn ? "flex" : "hidden"
          } md:flex`}
        >
          <div className="flex md:flex-row flex-col gap-4 text-xs tracking-[.7px] md:items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/category"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Category
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div className="flex flex-row gap-3">
          <Search width={18} className="cursor-pointer hover:text-red-700" />
          <ShoppingBag
            width={18}
            className="cursor-pointer hover:text-red-700"
          />
          <UserRound width={18} className="cursor-pointer hover:text-red-700" />
          <div className="md:hidden">
            {isOn ? (
              <X
                onClick={() => setIsOn(!isOn)}
                width={18}
                className="cursor-pointer md:hidden"
              />
            ) : (
              <Menu
                onClick={() => setIsOn(!isOn)}
                width={18}
                className="cursor-pointer md:hidden"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
