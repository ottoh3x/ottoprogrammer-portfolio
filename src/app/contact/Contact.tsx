/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { ReactElement, useRef } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import { Transition } from "@headlessui/react";

function Contact() {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_27otgd3",
        "template_nu3nlna",
        form.current,
        "wRGAYlk4r9LSqyEFS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <Transition
      appear={true}
      show={true}
      enter="transform transition duration-700"
      enterFrom="opacity-0 rotate-1 scale-[0.80]"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-300 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <div className="md:max-w-5xl mx-auto p-2  my-6  rounded-lg shadow-lg mt-20">
        <div className="flex flex-col items-center py-8">
          {" "}
          <h1 className="text-5xl font-black text-white">Get in touch</h1>
          <p className="text-zinc-500 p-2">
            Let's build something great together.
          </p>
        </div>

        <div className="flex flex-col w-full  justify-between mx-auto ">
          {/* <div className="p-2 ">
            <h1 className="text-gray-400 mx-auto text-2xl mb-4 lg:w-7/12">
              I am available for full time, part time and freelance work.
              Connect with me via email:{" "}
              <span className="text-gray-200">ottoprogrammer@gmail.com</span>.
            </h1>
          </div> */}
        </div>
        <div className="md:container max-w-[1024px]">
          <div
            className="relative min-h-[565px] overflow-hidden rounded-2xl border-[1px] border-neutral-800 -card-border pb-3 dark:border-card-border bg-neutral-900/95"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="relative flex flex-col items-center justify-center py-4">
              <div className="absolute left-4 top-[22px] flex gap-2">
                <div className="h-3 w-3 rounded-full border-[1px] border-[#F63636] bg-[#FF6057] " />
                <div className="h-3 w-3 rounded-full border-[1px] border-[#F6C136] bg-[#FDBC2E] " />
                <div className="h-3 w-3 rounded-full border-[1px] border-[#53CC28] bg-[#27C840] " />
              </div>
              <p className="mb-4 font-medium  dark:text-white">New Message</p>
              <div className="h-[1px] w-full bg-black dark:bg-white/10" />
            </div>
            <form ref={form} onSubmit={sendEmail} className="mb-4 px-6">
              <label htmlFor="email" className="my-4 flex items-center gap-2">
                <span className="font-medium  dark:text -white">E-mail:</span>
                <input
                  type="email"
                  className="flex-1 bg-transparent caret-fuchsia-400 placeholder:text-dark-gray focus:outline-none focus:ring-0 dark:text-light-gray dark:placeholder:text-medium-gray"
                  placeholder="Enter your email"
                  id="email"
                  name="email"
                />
              </label>
              <div className="h-[1px] w-full bg-black dark:bg-white/10" />
              <label htmlFor="name" className="my-4 flex items-center gap-2">
                <span className="font-medium  dark:text-white">Name:</span>
                <input
                  className="flex-1 bg-transparent  caret-fuchsia-400 placeholder:text-dark-gray focus:outline-none focus:ring-0 dark:text-light-gray dark:placeholder:text-medium-gray"
                  placeholder="Enter your name"
                  id="name"
                  name="name"
                />
              </label>
              <div className="h-[1px] w-full bg-black dark:bg-white/10" />
              <label htmlFor="subject" className="my-4 flex items-center gap-2">
                <span className="font-medium  dark:text-white">Subject:</span>
                <input
                  className="flex-1 bg-transparent caret-fuchsia-400 placeholder:text-dark-gray focus:outline-none focus:ring-0 dark:text-light-gray dark:placeholder:text-medium-gray"
                  placeholder="Enter subject"
                  id="subject"
                  name="subject"
                />
              </label>
              <div className="h-[1px] w-full bg-black dark:bg-white/10" />
              <div className="my-4 flex flex-col">
                <div className="relative">
                  <textarea
                    className="min-h-[200px] md:min-h-[320px] w-full resize-none rounded-lg bg-neutral-950 p-4  dark:text-light-gray caret-fuchsia-400 dark:placeholder:text-medium-gray placeholder:text-dark-gray focus:outline-none focus:ring-0 border-[1px] border-transparent"
                    name="message"
                    id="message"
                    placeholder="Write your message here"
                    defaultValue={""}
                  />
                </div>
                <div className="flex items-center justify-end">
                  <span className="block pr-2 text-xs text-medium-gray">
                    0{/* */}/{/* */}300
                  </span>
                </div>
              </div>
              <div id="captcha" />
              <button
                className="cursor-pointer rounded-lg bg-neutral-950 min-h-[60px] py-4 primary-button hover:translate-y-[-1px] dark:text-light-gray hover:text-white active:translate-y-[1px] font-medium transition duration-300 my-2 ms-auto flex w-full items-center justify-center gap-2 px-16 text-white md:w-fit"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default Contact;
