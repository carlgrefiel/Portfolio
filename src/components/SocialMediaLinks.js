import facebook from '../assets/svg/facebook.svg';
import facebookdark from '../assets/svg/facebookdark.svg';
import telegram from '../assets/svg/telegram.svg';
import telegramdark from '../assets/svg/telegramdark.svg';
import github from '../assets/svg/github.svg';
import githubdark from '../assets/svg/githubdark.svg';
import gmail from '../assets/svg/gmail.svg';
import gmaildark from '../assets/svg/gmaildark.svg';
import linkedin from '../assets/svg/linkedin.svg';
import linkedindark from '../assets/svg/linkedindark.svg';
import discord from '../assets/svg/discord.svg';
import discorddark from '../assets/svg/discorddark.svg';
import { Link } from 'react-router-dom';

export default function SocialMediaLinks(props) {
    return (
        <>
            <div className='lg:w-1/2 shadow-2xl p-5 rounded-lg flex items-center justify-center '>
                    <div>
                        <h3 className='text-xl font-semibold  text-center p-5'>Social Media links</h3>
                        <div className='grid grid-cols-2 gap-x-24 gap-y-5 '>
                            <Link className='cursor-pointer' target="_blank" to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" >
                                <div className='grid grid-cols-2 place-items-center'>
                                    <img className='w-[56px] h-[36]' alt='gmail' src={props.darkMode ? gmail : gmaildark}/>
                                    <p className='text-md font-medium '>Gmail</p>
                                </div>
                            </Link>
                            <Link className='cursor-pointer' target="_blank" to="https://www.linkedin.com/in/jhoncarlgrefiel/" > 
                                <div className='grid grid-cols-2 place-items-center '>
                                    <img className=' w-[56px] h-[36]' alt='linkedin' src={props.darkMode ?linkedin : linkedindark}/>
                                    <p className='text-md font-medium '>LinkedIn</p>
                                </div>
                            </Link>
                            <Link className='cursor-pointer' target="_blank" to="https://www.facebook.com/jhoncarl.grefiel" >
                                <div className='grid grid-cols-2 place-items-center'>
                                    <img className='w-[50px] h-[36]' alt='facebook' src={props.darkMode ?facebook : facebookdark}/>
                                    <p className='text-md font-medium'>Facebook</p>
                                </div>
                            </Link>
                            <Link className='cursor-pointer' target="_blank" to="https://web.telegram.org/k/" >
                                <div className='grid grid-cols-2 place-items-center'>
                                    <img className='w-[56px] h-[36]'  alt='telegram' src={props.darkMode ?telegram : telegramdark}/>
                                    <p className='text-md font-medium '>Telegram</p>
                                </div>
                            </Link>
                            <Link className='cursor-pointer' target="_blank" to="https://discord.com/" >
                                <div className='grid grid-cols-2 place-items-center'>
                                    <img className='w-[56px] h-[36]' alt='discord' src={props.darkMode ?discord : discorddark}/>
                                    <p className='text-md font-medium '>Discord</p>
                                </div>
                            </Link>
                            <Link className=' cursor-pointer' target="_blank" to="https://github.com/carlgrefiel" >
                                <div className='grid grid-cols-2 place-items-center'>
                                    <img className='w-[56px] h-[36]' alt='github' src={props.darkMode ?github : githubdark}/>
                                    <p className='text-md font-medium '>GitHub</p>
                                </div>
                            </Link>
                        </div> 
                    </div>
                    
                </div>
         </>               
    );
};