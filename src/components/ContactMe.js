import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'; //to install type: npm install @emailjs/browser
import { toast } from 'react-toastify'; //to install type: npm install --save react-toastify
import SocialMediaLinks from './SocialMediaLinks';
import { useForm } from "react-hook-form";//to install type: npm install react-hook-form


const ContactMe = (props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const form = useRef();

    const sendEmail = (formData) => {
        emailjs.send('service_j0kotr6', 'template_9hgtyhn', formData, 'BpuYCIdG0COZcK27g')
            .then((result) => {
                console.log(result.text);
                if (props.darkMode) {
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
                if (props.darkMode) {
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
        reset();
    };

    return (
        <section id="contact">
            <h2 className='xl:text-3xl lg:text-2xl text-xl font-semibold pl-10 pt-5' >
                Contact Me
            </h2>
            <div className='lg:flex-row flex  flex-col-reverse gap-5 '>
                <SocialMediaLinks darkMode={props.darkMode} />
                <div className='lg:w-1/2 shadow-2xl p-5 rounded-lg lg:mx-0 mx-auto md:w-3/4 w-full'>
                    <form ref={form} onSubmit={handleSubmit(sendEmail)} className="mx-auto lg:px-10">
                        <div className="relative flex flex-col ">
                            <label className="text-lg pt-5 pb-1" >
                                Name:
                            </label>
                            <input className="text-lg bg-transparent border-black  dark:border-white rounded-lg border-2 py-1 px-3"
                                id="name"
                                type="text"
                                name="user_name"
                                {...register("user_name", { required: true, minLength: 4 })} />
                            {errors.user_name && <span className=' text-red-500  pt-1'>Name is required!</span>}
                            <label className="text-lg pt-5 pb-1">
                                Contact:
                            </label>
                            <input className="text-lg bg-transparent border-black  dark:border-white rounded-lg border-2 py-1 px-3"
                                id="name"
                                type="tel"
                                name="user_contact"
                                {...register("user_contact", { required: true, minLength: 6, maxLength: 12 })} />
                            {errors.user_contact && <span className=' text-red-500 pt-1'>Contact number is required!</span>}
                            <label className="text-lg pt-5 pb-1">
                                Email Address:
                            </label>
                            <input className="text-lg bg-transparent border-black dark:border-white rounded-lg border-2 py-1 px-3"
                                id="name"
                                type="email"
                                name="user_email"
                                {...register("user_email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.user_email && <span className=' text-red-500 pt-1'>Email is required!</span>}
                            <label className="text-lg pt-5 pb-1"  >
                                Your Message
                            </label>
                            <textarea className="h-40 text-lg bg-transparent border-black dark:border-white rounded-lg border-2 py-2 px-3"
                                name="message"
                                {...register("message", { required: true, minLength: 10 })} />
                            {errors.message && <span className=' text-red-500 pt-1'>Message is required!</span>}
                        </div>
                        <button className="text-xl dark:bg-green-600 bg-violet-600 rounded-full py-1 px-3 w-full my-5 hover:bg-green-600 dark:hover:bg-violet-600 font-semibold"
                            type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default ContactMe;