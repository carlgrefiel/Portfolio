import { BsFillMoonFill } from "react-icons/bs";
import logoBlack from "../assets/logo/svg/logoBlack.svg";
import logoWhite from "../assets/logo/svg/logoWhite.svg";
import { CgClose, CgMenu } from "react-icons/cg";
import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link"; //to install type: npm install --save react-router-hash-link

const styles = {
  main: "bg-gray-100 font-sans dark:bg-zinc-900 dark:text-white ",
  navContainer:
    "sticky z-50 dark:bg-zinc-900  bg-gray-100 dark:bg-opacity-75 bg-opacity-75",
  navDiv:
    "xl:w-[1200px] mx-auto w-5/6 relative lg:h-[64px] h-[50px]  flex items-center justify-center",
  navUl:
    "md:visible lg:invisible bg-gray-200 shadow-2xl  dark:bg-gray-800 absolute rounded-lg p-5 w-52 flex flex-col right-0 top-20",
  navItem:
    "text-lg font-semibold cursor-pointer py-1 dark:hover:border-white hover:border-black  hover:border-b-2 dark:hover:text-green-600 hover:text-violet-700 ",
  navActive:
    " dark:border-white border-black  border-b-2 dark:text-green-600 text-violet-700",
};

export default function NavBar(props) {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={props.darkMode ? "dark" : ""}>
      <main className={styles.main}>
        <nav
          id="navbar"
          className={`${styles.navContainer} ${visible ? "top-0" : ""} `}
        >
          <div className={styles.navDiv}>
            <img
              className="absolute left-0"
              alt="logoBlack"
              src={props.darkMode ? logoWhite : logoBlack}
              width="100"
            />
            <ul
              onMouseLeave={open ? () => setOpen(!open) : () => setOpen(open)}
              className={
                open
                  ? `${styles.navUl}`
                  : "lg:visible invisible  flex gap-10 mx-auto"
              }
            >
              <Link to="#about" smooth>
                <li
                  onClick={() => props.setIsActive(1)}
                  className={`${styles.navItem}${
                    props.isActive === 1 ? `${styles.navActive}` : ""
                  }`}
                >
                  About
                </li>
              </Link>
              <Link to="#services" smooth>
                <li
                  onClick={() => props.setIsActive(2)}
                  className={`${styles.navItem}${
                    props.isActive === 2 ? `${styles.navActive}` : ""
                  }`}
                >
                  Services
                </li>
              </Link>
              <Link to="#skills" smooth>
                <li
                  onClick={() => props.setIsActive(3)}
                  className={`${styles.navItem}${
                    props.isActive === 3 ? `${styles.navActive}` : ""
                  }`}
                >
                  Skills
                </li>
              </Link>
              <Link to="#contact" smooth>
                <li
                  onClick={() => props.setIsActive(4)}
                  className={`${styles.navItem}${
                    props.isActive === 4 ? `${styles.navActive}` : ""
                  }`}
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="absolute right-0 flex ml-auto justify-center gap-5">
              <button>
                <BsFillMoonFill
                  onClick={props.handleOnClick}
                  className="cursor-pointer text-2xl"
                />
              </button>
              <button
                className="lg:invisible text-3xl"
                onClick={() => setOpen(!open)}
              >
                {open ? <CgClose /> : <CgMenu />}
              </button>
            </div>
          </div>
        </nav>
        <div className="xl:w-[1200px] mx-auto w-5/6">{props.children}</div>
      </main>
    </div>
  );
}
