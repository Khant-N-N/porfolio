import React, { useRef, useState } from "react";
import { cube1, cube2, cube3, cube4 } from "../assets";
import { styles } from "../style";
import emailjs from "@emailjs/browser";
import { contacts } from "../constants/constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const service_id = import.meta.env.VITE_SERVICE_ID;
  const public_key = import.meta.env.VITE_EMAILJS_API_KEY;
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        service_id,
        template_id,
        {
          from_name: form.name,
          to_name: "Khant Nyi Nyi",
          from_email: form.email,
          to_email: "khantnyinyi.magnet@gmail.com",
          message: form.message,
        },
        public_key
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank You for reaching out to me. I'll get back to you as soon as possible. Have a nice day. ❤️"
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          setLoading(false);
          alert("Something went wrong! Please try again.");
        }
      );
  };

  return (
    <div
      className="flex bg-primary items-center justify-center mt-28 relative overflow-hidden h-screen"
      id="contact"
    >
      <span className="star1" />
      <img
        loading="lazy"
        src={cube1}
        alt="cube1"
        className="w-16 walk-cube absolute right-0 top-6"
      />
      <img
        loading="lazy"
        src={cube2}
        alt="cube2"
        className="w-16 cube-fly right-[-100px] absolute"
      />
      <img
        loading="lazy"
        src={cube3}
        alt="cube3"
        className="w-16 cube-fly top-4 absolute"
      />
      <img
        loading="lazy"
        src={cube4}
        alt="cube4"
        className="w-16 absolute cube-bounce right-0 top-7"
      />

      <form
        ref={formRef}
        data-aos="zoom-out"
        onSubmit={handleSubmit}
        className="flex flex-col w-[90%] min-w-[300px] h-[550px] md:h-[600px] max-w-[600px] lg:w-[60%] z-10 border border-secondary rounded p-6 bg-primary gap-4"
      >
        <h2 className={styles.sectionHeadText}>Contact Me.</h2>
        <div className="flex gap-4 justify-center items-center">
          {contacts.map((contact, index) => (
            <a
              data-aos="zoom-in"
              data-aos-delay={`${index}00`}
              href={contact.link}
              key={index}
              target="_blank"
            >
              <img
                src={contact.logo}
                alt="logo"
                loading="lazy"
                className="w-10 md:w-14 hover:scale-110"
              />
            </a>
          ))}
        </div>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name(optional)"
          className="px-4 xs:px-6 py-4 rounded bg-tertiary placeholder:text-secondary outline-none border-none"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="px-4 xs:px-6 py-4 rounded bg-tertiary placeholder:text-secondary outline-none border-none"
        />
        <textarea
          value={form.message}
          name="message"
          onChange={handleChange}
          placeholder="Message"
          className="px-4 xs:px-6 py-4 rounded bg-tertiary placeholder:text-secondary outline-none border-none"
          rows="7"
          required
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 mt-5 bg-themeColor font-bold rounded-md shadow-md transition-shadow duration-300 hover:shadow-[0_0_10px_var(--theme-color)]"
          disabled={loading}
        >
          {loading ? "Sending" : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
