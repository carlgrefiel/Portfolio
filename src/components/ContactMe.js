import React, { useRef } from "react";
import emailjs from "@emailjs/browser"; //to install type: npm install @emailjs/browser
import { toast } from "react-toastify"; //to install type: npm install --save react-toastify
import SocialMediaLinks from "./SocialMediaLinks";
import { useForm } from "react-hook-form"; //to install type: npm install react-hook-form
import Fade from "react-reveal/Fade";
import { styles } from "./styles/styles";

export default function ContactMe(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const sendEmail = (formData) => {
    emailjs
      .send(
        "service_j0kotr6",
        "template_9hgtyhn",
        formData,
        "BpuYCIdG0COZcK27g"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (props.darkMode) {
            toast.success("Message Sent!", {
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
            toast.success("Message Sent!", {
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
        },
        (error) => {
          console.log(error.text);
          if (props.darkMode) {
            toast.error("Message was not Sent!", {
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
            toast.error("Message was not Sent!", {
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
        }
      );
    reset();
  };

  return (
    <section
      onMouseEnter={() => props.setIsActive(4)}
      id="contact"
      className={styles.section}
    >
      <h2 className={styles.h2}>Contacts</h2>
      <div className="lg:flex-row flex  flex-col-reverse gap-5 ">
        <SocialMediaLinks darkMode={props.darkMode} isActive={props.isActive} />
        <Fade right duration={2000} distance="150px">
          <div className={styles.divContainerContact}>
            <form
              ref={form}
              onSubmit={handleSubmit(sendEmail)}
              className="mx-auto lg:px-10"
            >
              <div className="flex flex-col ">
                <label className={styles.label}>Name:</label>
                <input
                  className={styles.input}
                  id="name"
                  type="text"
                  name="user_name"
                  {...register("user_name", { required: true, minLength: 4 })}
                />
                {errors.user_name && (
                  <span className={styles.error}>Name is required!</span>
                )}
                <label className={styles.label}>Contact:</label>
                <input
                  className={styles.input}
                  id="name"
                  type="tel"
                  name="user_contact"
                  {...register("user_contact", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
                {errors.user_contact && (
                  <span className={styles.error}>
                    Contact number is required!
                  </span>
                )}
                <label className={styles.label}>Email Address:</label>
                <input
                  className={styles.input}
                  id="name"
                  type="email"
                  name="user_email"
                  {...register("user_email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.user_email && (
                  <span className={styles.error}>Email is required!</span>
                )}
                <label className={styles.label}>Your Message</label>
                <textarea
                  className={styles.textarea}
                  name="message"
                  {...register("message", { required: true, minLength: 10 })}
                />
                {errors.message && (
                  <span className={styles.error}>Message is required!</span>
                )}
              </div>
              <button className={styles.contactButton} type="submit">
                Send
              </button>
            </form>
          </div>
        </Fade>
      </div>
    </section>
  );
}
