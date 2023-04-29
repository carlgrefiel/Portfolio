import facebook from "../assets/icons/svg/facebook-icon.svg";
import facebookdark from "../assets/icons/svg/facebookdark-icon.svg";
import telegram from "../assets/icons/svg/telegram-icon.svg";
import telegramdark from "../assets/icons/svg/telegramdark-icon.svg";
import github from "../assets/icons/svg/github-icon.svg";
import githubdark from "../assets/icons/svg/githubdark-icon.svg";
import gmail from "../assets/icons/svg/gmail-icon.svg";
import gmaildark from "../assets/icons/svg/gmaildark-icon.svg";
import linkedin from "../assets/icons/svg/linkedin-icon.svg";
import linkedindark from "../assets/icons/svg/linkedindark-icon.svg";
import discord from "../assets/icons/svg/discord-icon.svg";
import discorddark from "../assets/icons/svg/discorddark-icon.svg";
import { HashLink as Link } from "react-router-hash-link"; //to install type: npm install --save react-router-hash-link

const styles = {
  isActive:
    "lg:text-xl md:text-lg text-md font-semibold cursor-pointer py-1 dark:border-white border-black  border-b-2 dark:text-green-600 text-violet-700",
  isNotActive:
    "lg:text-xl md:text-lg text-md font-semibold cursor-pointer py-1 dark:hover:border-white hover:border-black  hover:border-b-2 dark:hover:text-green-600 hover:text-violet-700   ",
};

export default function SocialMediaLinks(props) {
  return (
    <>
      <div className="lg:w-1/2 shadow-2xl p-5 rounded-lg flex items-center justify-center dark:bg-zinc-600 bg-gray-50">
        <div>
          <h3 className="lg:text-xl text-lg font-semibold  text-center p-5">
            Social Media links
          </h3>
          <div className="grid grid-cols-2 md:gap-x-24 gap-x-auto  gap-y-5 ">
            <Link
              className="cursor-pointer"
              target="_blank"
              to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
            >
              <div className="grid grid-cols-2 place-items-center">
                <img
                  className="w-[56px] lg:h-[56px] h-[36px]"
                  alt="gmail"
                  src={props.darkMode ? gmail : gmaildark}
                />
                <p className="lg:text-lg md:text-md text-sm font-medium ">
                  Gmail
                </p>
              </div>
            </Link>
            <Link
              className="cursor-pointer"
              target="_blank"
              to="https://www.linkedin.com/in/jhoncarlgrefiel/"
            >
              <div className="grid grid-cols-2 place-items-center ">
                <img
                  className=" w-[56px] lg:h-[56px] h-[36px]"
                  alt="linkedin"
                  src={props.darkMode ? linkedin : linkedindark}
                />
                <p className="lg:text-lg md:text-md text-sm font-medium ">
                  LinkedIn
                </p>
              </div>
            </Link>
            <Link
              className="cursor-pointer"
              target="_blank"
              to="https://www.facebook.com/jhoncarl.grefiel"
            >
              <div className="grid grid-cols-2 place-items-center">
                <img
                  className="w-[50px] lg:h-[56px] h-[36px]"
                  alt="facebook"
                  src={props.darkMode ? facebook : facebookdark}
                />
                <p className="lg:text-lg md:text-md text-sm font-medium">
                  Facebook
                </p>
              </div>
            </Link>
            <Link
              className="cursor-pointer"
              target="_blank"
              to="https://web.telegram.org/k/"
            >
              <div className="grid grid-cols-2 place-items-center">
                <img
                  className="w-[56px] lg:h-[56px] h-[36px]"
                  alt="telegram"
                  src={props.darkMode ? telegram : telegramdark}
                />
                <p className="lg:text-lg md:text-md text-sm font-medium ">
                  Telegram
                </p>
              </div>
            </Link>
            <Link
              className="cursor-pointer"
              target="_blank"
              to="https://discord.com/"
            >
              <div className="grid grid-cols-2 place-items-center">
                <img
                  className="w-[56px] lg:h-[56px] h-[36px]"
                  alt="discord"
                  src={props.darkMode ? discord : discorddark}
                />
                <p className="lg:text-lg md:text-md text-sm font-medium ">
                  Discord
                </p>
              </div>
            </Link>
            <Link
              className=" cursor-pointer"
              target="_blank"
              to="https://github.com/carlgrefiel"
            >
              <div className="grid grid-cols-2 place-items-center">
                <img
                  className="w-[56px] lg:h-[56px] h-[36px]"
                  alt="github"
                  src={props.darkMode ? github : githubdark}
                />
                <p className="lg:text-lg md:text-md text-sm font-medium ">
                  GitHub
                </p>
              </div>
            </Link>
          </div>
          <ul className="flex flex-wrap place-content-center gap-x-5 pt-10">
            <Link to="#home" smooth>
              <li
                className={
                  props.isActive === 0
                    ? `${styles.isActive}`
                    : `${styles.isNotActive}`
                }
              >
                Home
              </li>
            </Link>
            <Link to="#about" smooth>
              <li
                className={
                  props.isActive === 1
                    ? `${styles.isActive}`
                    : `${styles.isNotActive}`
                }
              >
                About
              </li>
            </Link>
            <Link to="#services" smooth>
              <li
                className={
                  props.isActive === 2
                    ? `${styles.isActive}`
                    : `${styles.isNotActive}`
                }
              >
                Services
              </li>
            </Link>
            <Link to="#tools" smooth>
              <li
                className={
                  props.isActive === 3
                    ? `${styles.isActive}`
                    : `${styles.isNotActive}`
                }
              >
                Tools
              </li>
            </Link>
            <Link to="#contact" smooth>
              <li
                className={
                  props.isActive === 4
                    ? `${styles.isActive}`
                    : `${styles.isNotActive}`
                }
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
