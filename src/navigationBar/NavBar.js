import { BsFillMoonFill } from 'react-icons/bs';
import logoBlack from '../assets/logo/svg/logoBlack.svg';
import logoWhite from '../assets/logo/svg/logoWhite.svg';
import { CgClose, CgMenu } from 'react-icons/cg'
import { useState, useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';//to install type: npm install --save react-router-hash-link



export default function NavBar(props) {
    const [open, setOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > prevScrollPos) {
            setVisible(false)
        } else {
            setVisible(true)
        }

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <div className={props.darkMode ? "dark" : ""}>
            <main className='bg-white font-sans dark:bg-gray-900 dark:text-white '>
                <div className='xl:w-[1200px] mx-auto w-5/6'>
                    <nav id='navbar' className={`sticky ${visible ? 'top-0 bg-white' : ''} `}>
                        <div className='relative lg:h-[100px] h-[50px] w-full flex items-center justify-center'>
                            <img className='absolute left-0' alt="logoBlack" src={props.darkMode ? logoWhite : logoBlack} width="100" />
                            <ul onMouseLeave={open ? () => setOpen(!open) : () => setOpen(open)} className={open ? 'md:visible lg:invisible bg-gray-200 shadow-2xl  dark:bg-gray-800 absolute rounded-lg p-5 w-52 flex flex-col right-0 top-20' : 'lg:visible invisible  flex gap-10 mx-auto'}>
                                <Link to="#about" smooth >
                                    <li onClick={() => props.setIsActive(1)} className={`text-lg font-semibold cursor-pointer py-1 dark:hover:border-white hover:border-black  hover:border-b-2 hover:text-teal-600 ${props.isActive === 1 ? ' dark:border-white border-black  border-b-2 text-teal-600' : ''}`}>
                                        About
                                    </li>
                                </Link>
                                <Link to="#services" smooth >
                                    <li onClick={() => props.setIsActive(2)} className={`text-lg font-semibold cursor-pointer py-1 dark:hover:border-white hover:border-black  hover:border-b-2 hover:text-teal-600 ${props.isActive === 2 ? ' dark:border-white border-black  border-b-2 text-teal-600' : ''}`}>
                                        Services
                                    </li>
                                </Link>
                                <Link to="#tools" smooth >
                                    <li onClick={() => props.setIsActive(3)} className={`text-lg font-semibold cursor-pointer py-1 dark:hover:border-white hover:border-black  hover:border-b-2 hover:text-teal-600 ${props.isActive === 3 ? ' dark:border-white border-black  border-b-2 text-teal-600' : ''}`}>
                                        Tools
                                    </li>
                                </Link>
                                <Link to="#contact" smooth >
                                    <li onClick={() => props.setIsActive(4)} className={`text-lg font-semibold cursor-pointer py-1 dark:hover:border-white hover:border-black  hover:border-b-2 hover:text-teal-600 ${props.isActive === 4 ? ' dark:border-white border-black  border-b-2 text-teal-600' : ''}`}>
                                        Contact
                                    </li>
                                </Link>
                            </ul>
                            <div className='absolute right-0 flex ml-auto justify-center gap-5'>
                                <button>
                                    <BsFillMoonFill onClick={props.handleOnClick} className='cursor-pointer text-2xl' />
                                </button>
                                <button className='lg:invisible text-3xl' onClick={() => setOpen(!open)}>
                                    {open ? <CgClose /> : <CgMenu />}
                                </button>
                            </div>
                        </div>
                    </nav>
                    {props.children}
                </div>
            </main>
        </div >

    );
};