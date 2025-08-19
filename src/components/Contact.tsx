"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "@/utils/motion";
import Header from "./ui/Header";
import SectionWrapper from "@/hoc/SectionWrapper";
import EarthCanvas from "./canvas/Earth";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_tqkuyyr",
        "template_9htz0h8",
        {
          from_name: form.name,
          to_name: "Omar",
          from_email: form.email,
          to_email: "omr222000@gmail.com",
          message: form.message,
        },
        "mje_dLtaQ68yzlFyj"
      )
      .then(
        () => {
          setLoading(false);

          alert("Thank you. I will get back to you as soon as possible");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);

          setLoading(false);

          alert("oops, Something went wrong.");
        }
      );
  };

  return (
    <section className="mt-10">
      <Header text="Get in touch" />
      <div className="flex items-center flex-col-reverse lg:flex-row gap-10">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-gradient p-8 rounded-2xl shadow-xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col mt-12 gap-8"
          >
            <label htmlFor="name" className="flex flex-col">
              <span className="text-text-secondary font-medium mb-4">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-bg py-4 px-6 placeholder:text-text text-text-secondary rounded-lg border-none outline-none font-medium"
              />
            </label>
            <label htmlFor="email" className="flex flex-col">
              <span className="text-text-secondary font-medium mb-4">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-bg py-4 px-6 placeholder:text-text text-text-secondary rounded-lg border-none outline-none font-medium"
              />
            </label>
            <label htmlFor="message" className="flex flex-col">
              <span className="text-text-secondary font-medium mb-4">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-bg py-4 px-6 placeholder:text-text- text-text-secondary rounded-lg border-none outline-none font-medium resize-none"
              />
            </label>
            <button
              type="submit"
              className="bg-bg py-4 px-6 text-text-secondary rounded-lg border-none outline-none font-bold w-fit shadow-xl cursor-pointer hover:bg-text-secondary hover:text-white duration-400"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-1 h-[350px] md:h-[550px] xl:h-out"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
