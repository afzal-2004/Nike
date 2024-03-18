import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
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
            <img src={hamburger} alt="hamBurger" width={25} height={25} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
