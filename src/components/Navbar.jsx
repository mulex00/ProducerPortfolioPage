import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { Link } from "react-scroll";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./Checkbox.css";

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { t } = useTranslation();
  const nav = t("nav", { returnObjects: true });
  const [darkmodeEnabled, setDarkmodeEnabled] = useState(true);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("theme", "dark");
    setDarkmodeEnabled(true);
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("theme", "light");
    setDarkmodeEnabled(false);
  };
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div>
      {/* DESKTOP NAV */}
      {isDesktop ? (
        <nav
          className={`backdrop-filter z-40 backdrop-blur-xl w-full fixed top-0 py-6`}
        >
          <div className="flex items-center justify-between mx-auto w-5/6">
            <img className="w-[200px]" src="/assets/MVLLERlogo.png" />

            <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
              <Link
                className="hover:text-text-secondary-color"
                activeClass="text-text-secondary-color"
                href="home"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {nav[0]}
              </Link>
              <Link
                className="hover:text-text-secondary-color"
                activeClass="text-text-secondary-color"
                href="newmusic"
                to="newmusic"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {nav[1]}
              </Link>
              <Link
                className="hover:text-text-secondary-color"
                activeClass="text-text-secondary-color"
                href="releases"
                to="releases"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {nav[2]}
              </Link>
              <Link
                className="hover:text-text-secondary-color"
                activeClass="text-text-secondary-color"
                href="contact"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {nav[3]}
              </Link>
              <div className="flex justify-between gap-2 font-opensans text-sm font-semibold">
                <img
                  className="w-[32px] h-[32px]"
                  src={`/assets/lang/${t("lng")}.png`}
                  alt="lng"
                />
                <select
                  className="rounded-full text-black"
                  value={t("lng")}
                  name="language_selector"
                  title="language_selector"
                  onChange={(e) => i18next.changeLanguage(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="de">Deutsch</option>
                  <option value="hu">Magyar</option>
                </select>
              </div>
              <input
                className="nav-checkbox"
                checked={darkmodeEnabled}
                title="toggleTheme"
                type="checkbox"
                onChange={toggleTheme}
                id="darkmode-toggle"
              />
            </div>
          </div>
        </nav>
      ) : (
        <nav
          className={`backdrop-filter backdrop-blur-xl z-40 w-full fixed top-0 py-6`}
        >
          <div className="flex items-center justify-between mx-auto w-5/6">
          <img className="w-[200px]" src="/assets/MVLLERlogo.png" />
            <button
              className="rounded-full"
              title="fa-bars"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <a className="text-3xl">
                <i className="fa-solid fa-bars"></i>
              </a>
            </button>
          </div>
        </nav>
      )}

      {/* MOBILE MENU POPUP */}
      {!isDesktop && isMenuToggled && (
        <div className="z-40 fixed right-0 bottom-0 bg-background-color h-full w-[300px]">
          {/* CLOSE ICON */}
          <div className="flex justify-end py-6 px-12">
            <button
              title="fa-xmark"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <a className="text-3xl">
                <i className="fa-solid fa-xmark"></i>
              </a>
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col gap-10 ml-[33%] text-2xl text-text-color">
            <input
              className="nav-checkbox"
              checked={darkmodeEnabled}
              title="toggleTheme"
              type="checkbox"
              onChange={toggleTheme}
              id="darkmode-toggle"
            />
            <Link
              className="hover:text-text-secondary-color"
              activeClass="text-text-secondary-color"
              href="home"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {nav[0]}
            </Link>
            <Link
              className="hover:text-text-secondary-color"
              activeClass="text-text-secondary-color"
              href="newmusic"
              to="newmusic"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {nav[1]}
            </Link>
            <Link
              className="hover:text-text-secondary-color"
              activeClass="text-text-secondary-color"
              href="releases"
              to="releases"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {nav[2]}
            </Link>
            <Link
              className="hover:text-text-secondary-color"
              activeClass="text-text-secondary-color"
              href="contact"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {nav[3]}
            </Link>
            <div className="flex justify-between gap-2 font-opensans text-sm font-semibold">
              <img
                className="w-[32px] h-[32px]"
                src={`/assets/lang/${t("lng")}.png`}
                alt="lng"
              />
              <select
                className="rounded-full mr-[33%] text-black"
                value={t("lng")}
                name="language_selector"
                title="language_selector"
                onChange={(e) => i18next.changeLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="hu">Magyar</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
