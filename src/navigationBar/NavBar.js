import { BsFillMoonFill} from 'react-icons/bs';
import logoBlack from '../assets/svg/logoBlack.svg';
import logoWhite from '../assets/svg/logoWhite.svg';
import { CgClose, CgMenu } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import { useState } from "react";


export default function NavBar(props) {

    
    const [open, setOpen] = useState(false);
    return (
        <div className={props.darkMode ? "dark" : ""}>
            <main className='bg-gray-100 px-10 font-sans dark:bg-gray-900 dark:text-white '>
                <nav >
                    <div className='relative px-10 h-[100px] w-full flex items-center justify-center'>
                        <img className='absolute left-0' alt="logoBlack"src={props.darkMode ? logoWhite : logoBlack} width="100" />
                        <ul onMouseLeave={open ? () => setOpen(!open): () => setOpen(open)} className={open ? 'md:visible lg:invisible bg-gray-200 shadow-2xl  dark:bg-gray-800 absolute rounded-lg p-5 w-52 flex flex-col right-0 top-20' : 'lg:visible invisible  flex gap-10 mx-auto'}>
                            <li className='text-lg font-semibold cursor-pointer py-1 dark:hover:border-white hover:border-black lg:border-none hover:border-b-2 hover:text-teal-600'>
                                <Link to="/contactme">Home</Link>
                            </li>
                            <li className='text-lg font-semibold cursor-pointer py-1 dark:hover:border-white hover:border-black lg:border-none hover:border-b-2 hover:text-teal-600'>About</li>
                            <li className='text-lg font-semibold cursor-pointer py-1 dark:hover:border-white hover:border-black lg:border-none hover:border-b-2 hover:text-teal-600'>Services</li>
                            <li className='text-lg font-semibold cursor-pointer py-1 dark:hover:border-white hover:border-black lg:border-none hover:border-b-2 hover:text-teal-600'>Tools</li>
                            <li className='text-lg font-semibold cursor-pointer py-1 dark:hover:border-white hover:border-black lg:border-none hover:border-b-2 hover:text-teal-600'>Contact</li>
                        </ul>
                        <div className='absolute right-0 flex ml-auto justify-center gap-5'>
                            <button><BsFillMoonFill onClick={props.handleOnClick} className='cursor-pointer text-2xl'/> </button>
                            <button className='lg:invisible text-3xl' onClick={()=> setOpen(!open)}>{open ? <CgClose /> : <CgMenu />}</button>
                        </div>
                    </div>
                 </nav>
                 {props.children}
            </main>
        </div>
        
    );
};