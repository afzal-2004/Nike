import { headerLogo } from "../assets/images";
import { hamburger, Cross } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
const Nav = () => {
  const [OpenNav, setOpenNav] = useState(true);

  return (
    <>
      <header className=" padding-x py-8 absolute z-10 w-full">
        <nav className=" flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} height={29} alt="HederLogo" />
          </a>
          <ul className=" flex-1 flex justify-center gap-16 max-sm:hidden items-center">
            {navLinks.map((items) => (
              <li key={items.label} className="">
                <a
                  href={items.href}
                  className=" font-monts errat leading-normal text-slate-gray "
                >
                  {items.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="  visible sm:hidden">
            {OpenNav ? (
              <img
                src={Cross}
                alt="hamBurger"
                width={25}
                height={25}
                onClick={() => setOpenNav(!OpenNav)}
              />
            ) : (
              <img
                src={hamburger}
                alt="hamBurger"
                width={25}
                height={25}
                onClick={() => setOpenNav(!OpenNav)}
              />
            )}
          </div>
        </nav>
        {OpenNav && (
          <>
            <ul className="  bg-slate-100 absolute right-2 p-4   duration-300  ">
              {navLinks.map((items, index) => (
                <li key={index} className=" p-4">
                  <a href={items.href}>{items.label}</a>
                </li>
              ))}
            </ul>
          </>
        )}
      </header>
    </>
  );
};

export default Nav;
