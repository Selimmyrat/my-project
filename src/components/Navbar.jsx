import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";

import { UserRound, Search, ShoppingBag, Menu, X } from "lucide-react";

import classes from "./Navbar.module.css";

function Navbar() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <div className="font-albert sticky top-0 w-full mx-auto h-16 text-black items-center bg-white shadow-sm content-center z-50">
        <div className=" font-bold uppercase flex justify-between flex-row items-center ">
          <Link className="" to="/">
            <h1>LogoLogo</h1>
          </Link>

          <div
            className={clsx(
              "border-t-2 md:static absolute md:min-h-fit min-h-screen left-0 top-16 md:w-auto w-60 bg-white p-5 z-50",

              {
                hidden: !isOn,
                flex: isOn,
                "md:flex": true,
              }
            )}
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
            <UserRound
              width={18}
              className="cursor-pointer hover:text-red-700"
            />
            <button
              className="cursor-pointer md:hidden"
              onClick={() => setIsOn(!isOn)}
            >
              {isOn ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>
      {isOn && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-10"
          onClick={() => setIsOn(false)}
        ></div>
      )}
    </>
  );
}
export default Navbar;
