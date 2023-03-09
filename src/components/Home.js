import { useState } from 'react';
import karu from '../assets/images/karu.png'
import { HashLink as Link } from 'react-router-hash-link';//to install type: npm install --save react-router-hash-link

export default function Home(props) {
    const [hover, setHover] = useState(false);//to change the color of animation pulse while hovering
    return (
        <section id='home' >
            <div className=' xl:flex pt-10'>
                <div className='text-center lg:max-w-xl md:max-w-lg md:mx-auto sm:max-w-lg sm:mx-auto '>
                    <h1 className='xl:text-5xl xl:font-semibold lg:text-4xl text-3xl font-medium text-gray-800 dark:text-gray-50' >
                        Hello, I'm <span className='text-violet-700 dark:text-green-600 font-bold'>Jhon Carl</span>
                    </h1>
                    <h2 className='xl:text-3xl lg:text-2xl text-xl py-2'>
                        Web Developer and Designer
                    </h2>
                    <p className='lg:text-xl md:text-lg text-md py-5 leading-8'>
                        As a skilled web developer and designer, I provide various services to assist you in developing the ideal website or application for your company.
                    </p>
                    <Link className='relative grid justify-items-center h-28' to="#contact" smooth>
                        <span className={hover ? 'animate-ping dark:bg-violet-600 bg-green-600 rounded-full xl:h-12 lg:h-12 xl:w-32 lg:w-32 h-9 w-24  mt-10 ' : 'animate-ping bg-violet-600 dark:bg-green-600 rounded-full xl:h-12 lg:h-12 xl:w-32 lg:w-32 h-9 w-24  mt-10'}></span>
                        <button onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)} className='absolute bg-violet-600 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-violet-600 xl:py-2 lg:py-2 py-1 lg:px-10 xl:px-10 px-8  font-bold rounded-full xl:text-2xl lg:text-xl  text-lg mt-10 '>
                            Hire Me
                        </button>
                    </Link>
                </div>
                <div className='relative bg-gradient-to-t dark:from-gray-100 dark:to-green-600 from-gray-900 to-violet-600 rounded-full xl:w-80 xl:h-80 h-0 mx-auto invisible xl:visible '>
                    <img alt="carl" className='cursor-pointer' src={karu} />
                </div>
            </div>
        </section>
    );
};