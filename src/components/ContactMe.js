import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'; //to install type: npm install @emailjs/browser
import { toast } from 'react-toastify'; //to install type: npm install --save react-toastify
import FormContactMe from './FormContactMe';
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


const ContactMe = (props) => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j0kotr6', 'template_9hgtyhn', form.current, 'BpuYCIdG0COZcK27g')
      .then((result) => {
          console.log(result.text);
          if(props.darkMode){
            toast.success('Message Sent!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark ",
                });
          } else {
            toast.success('Message Sent!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light ",
                });
          }
      }, (error) => {
          console.log(error.text);
          if(props.darkMode){
            toast.error('Message was not Sent!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark ",
                });
          } else {
            toast.error('Message was not Sent!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light ",
                });
          }
      });
  };
    return (
        <section id="contactme">
            <h2 className='xl:text-3xl lg:text-2xl text-xl font-semibold pl-10 pt-5' >
                    Contact Me
            </h2>
            <div className='lg:flex-row flex  flex-col-reverse gap-5 '>
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
                <div className='lg:w-1/2 shadow-2xl p-5 rounded-lg lg:mx-0 mx-auto md:w-3/4 w-full'>
                    <form ref={form} onSubmit={sendEmail} className="mx-auto px-5">
                            <FormContactMe />
                    </form>
                </div>
            </div>
        </section>
    );
}
export default ContactMe;