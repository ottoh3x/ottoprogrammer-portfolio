/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { ReactElement, useRef } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";



function Contact() {
  const form : any= useRef();

  const sendEmail = (e:any) => {
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
    <div
      
      className="container mx-auto p-2  my-6  rounded-lg shadow-lg mt-20"
    >
      <div className="flex flex-col items-center py-8">
        {" "}
        <h1 className="text-5xl font-black text-white">Get in touch</h1>
        <p className="text-zinc-500 p-2">Let's build something great together.</p>
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
      <div className="container max-w-[1024px]">
        <div
          className="relative min-h-[565px] overflow-hidden rounded-2xl border-[1px] border-neutral-800 -card-border pb-3 dark:border-card-border bg-neutral-900"
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
        <div className="my-16 flex flex-wrap items-center justify-center gap-4 text-dark-gray ">
          <a
            target="_blank"
            className="block relative p-4 transition hover: dark:hover:text-white duration-300 before:content-[''] before:rounded-xl hover:block before:absolute before:inset-0 before:opacity-0 before:scale-0 before:-z-[-10] hover:before:opacity-100 before:bg-light-gray/10 hover:before:scale-100 before:transition-all"
            aria-label="ReadCV"
            href="https://read.cv/eihab"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
            >
              <g clipPath="url(#a)">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M6.842.912A3.162 3.162 0 0 0 6.19 1.96L1.117 15.408a3.162 3.162 0 0 0 1.842 4.075l10.757 4.06a3.164 3.164 0 0 0 4.075-1.844l5.074-13.448a3.161 3.161 0 0 0-1.84-4.076L10.265.116a3.162 3.162 0 0 0-3.423.796Zm2.139 4.25a.862.862 0 0 1 1.112-.501l8.065 3.042a.862.862 0 1 1-.608 1.614L9.483 6.275a.862.862 0 0 1-.502-1.112ZM7.662 8.66a.862.862 0 0 1 1.11-.503l8.067 3.042a.861.861 0 0 1 .326 1.398.865.865 0 0 1-.934.218L8.164 9.77a.862.862 0 0 1-.502-1.11Zm-1.319 3.497a.863.863 0 0 1 1.11-.503l5.38 2.029a.862.862 0 0 1-.276 1.67.862.862 0 0 1-.332-.055l-5.38-2.03a.863.863 0 0 1-.502-1.111Z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            aria-label="LinkedIn"
            target="_blank"
            className="block relative p-4 transition hover: dark:hover:text-white duration-300 before:content-[''] before:rounded-xl hover:block before:absolute before:inset-0 before:opacity-0 before:scale-0 before:-z-[-10] hover:before:opacity-100 before:bg-light-gray/10 hover:before:scale-100 before:transition-all"
            href="https://www.linkedin.com/in/eihab-khan/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
            >
              <g clipPath="url(#LinkedIn_svg__a)">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M21.335 24H2.67a2.667 2.667 0 0 1-2.667-2.667V2.667A2.667 2.667 0 0 1 2.669 0h18.666a2.667 2.667 0 0 1 2.667 2.667v18.666A2.667 2.667 0 0 1 21.335 24Zm-4.23-3.333h3.562V13.35c0-3.095-1.755-4.592-4.206-4.592-2.452 0-3.484 1.91-3.484 1.91V9.11H9.545v11.556h3.432V14.6c0-1.626.748-2.593 2.18-2.593 1.317 0 1.949.93 1.949 2.593v6.066ZM3.335 5.466c0 1.177.947 2.132 2.116 2.132 1.17 0 2.116-.955 2.116-2.132A2.124 2.124 0 0 0 5.45 3.333c-1.169 0-2.116.955-2.116 2.133Zm3.923 15.2H3.678V9.112h3.58v11.556Z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="LinkedIn_svg__a">
                  <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            aria-label="GitHub"
            target="_blank"
            className="block relative p-4 transition hover: dark:hover:text-white duration-300 before:content-[''] before:rounded-xl hover:block before:absolute before:inset-0 before:opacity-0 before:scale-0 before:-z-[-10] hover:before:opacity-100 before:bg-light-gray/10 hover:before:scale-100 before:transition-all"
            href="https://github.com/eihabkhan"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
            >
              <g clipPath="url(#a)">
                <g clipPath="url(#b)">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M11.964 0C5.348 0 0 5.388 0 12.053c0 5.328 3.427 9.838 8.18 11.434.595.12.813-.259.813-.578 0-.28-.02-1.237-.02-2.235-3.328.718-4.02-1.437-4.02-1.437-.536-1.397-1.328-1.756-1.328-1.756-1.09-.738.08-.738.08-.738 1.207.08 1.841 1.237 1.841 1.237 1.07 1.836 2.793 1.317 3.487.998.099-.779.416-1.317.752-1.617-2.654-.28-5.447-1.317-5.447-5.947 0-1.317.475-2.394 1.228-3.232-.119-.3-.535-1.537.12-3.193 0 0 1.01-.32 3.287 1.237.975-.264 1.981-.398 2.991-.4 1.01 0 2.04.14 2.991.4 2.278-1.557 3.288-1.237 3.288-1.237.654 1.656.238 2.894.12 3.193.772.838 1.227 1.915 1.227 3.232 0 4.63-2.792 5.648-5.467 5.947.436.38.812 1.098.812 2.235 0 1.617-.02 2.914-.02 3.313 0 .32.219.698.813.579a12.044 12.044 0 0 0 8.18-11.435C23.929 5.388 18.56 0 11.965 0Z"
                    clipRule="evenodd"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
                <clipPath id="b">
                  <path fill="#fff" d="M0 0h24v23.51H0z" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            aria-label="X (Twitter)"
            target="_blank"
            className="block relative p-4 transition hover: dark:hover:text-white duration-300 before:content-[''] before:rounded-xl hover:block before:absolute before:inset-0 before:opacity-0 before:scale-0 before:-z-[-10] hover:before:opacity-100 before:bg-light-gray/10 hover:before:scale-100 before:transition-all"
            href="https://twitter.com/eihab_khan"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
            >
              <g clipPath="url(#a)">
                <path
                  fill="currentColor"
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="transparent" d="M0 0h24v24H0z" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            target="_blank"
            className="block relative p-4 transition hover: dark:hover:text-white duration-300 before:content-[''] before:rounded-xl hover:block before:absolute before:inset-0 before:opacity-0 before:scale-0 before:-z-[-10] hover:before:opacity-100 before:bg-light-gray/10 hover:before:scale-100 before:transition-all"
            href="https://discord.com/users/eihabkhan"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
            >
              <g clipPath="url(#a)">
                <path
                  fill="currentColor"
                  d="M20.329 4.612a19.858 19.858 0 0 0-4.954-1.524c-.234.419-.445.85-.634 1.29a18.447 18.447 0 0 0-5.497 0c-.19-.44-.4-.871-.635-1.29a19.997 19.997 0 0 0-4.957 1.528C.517 9.254-.333 13.776.092 18.236a19.966 19.966 0 0 0 6.075 3.05c.492-.662.927-1.364 1.301-2.099a12.916 12.916 0 0 1-2.048-.978c.171-.125.34-.253.502-.378a14.27 14.27 0 0 0 12.146 0c.165.134.333.263.503.378-.655.386-1.341.714-2.053.98.373.734.809 1.436 1.301 2.096a19.876 19.876 0 0 0 6.079-3.048c.498-5.17-.852-9.652-3.57-13.625ZM8.007 15.493c-1.184 0-2.163-1.074-2.163-2.396 0-1.322.945-2.406 2.159-2.406s2.185 1.084 2.164 2.406c-.02 1.322-.954 2.396-2.16 2.396Zm7.976 0c-1.186 0-2.16-1.074-2.16-2.396 0-1.322.944-2.406 2.16-2.406 1.217 0 2.18 1.084 2.159 2.406-.02 1.322-.952 2.396-2.159 2.396Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            aria-label="Behance"
            target="_blank"
            className="block relative p-4 transition hover: dark:hover:text-white duration-300 before:content-[''] before:rounded-xl hover:block before:absolute before:inset-0 before:opacity-0 before:scale-0 before:-z-[-10] hover:before:opacity-100 before:bg-light-gray/10 hover:before:scale-100 before:transition-all"
            href="https://www.behance.net/eihabkhan"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
            >
              <path
                fill="currentColor"
                d="M8.557 7.994H5.045v2.693H8.34c.57 0 1.072-.182 1.072-1.438 0-1.255-.854-1.255-.854-1.255ZM5.045 15.77H8.38c.5-.01 1.45-.156 1.45-1.567 0-1.674-1.273-1.657-1.273-1.657H5.045v3.224ZM17.548 10.687c-1.864 0-2.123 1.859-2.123 1.859h3.963s.023-1.86-1.84-1.86Z"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1.2 0A1.2 1.2 0 0 0 0 1.2v21.6A1.2 1.2 0 0 0 1.2 24h21.6a1.2 1.2 0 0 0 1.2-1.2V1.2A1.2 1.2 0 0 0 22.8 0H1.2Zm10.771 9.062c0 2.16-1.84 2.296-1.84 2.296 2.426 0 2.259 2.995 2.259 2.995 0 3.682-3.833 3.561-3.833 3.561H2.28V5.85h6.278c1.908 0 3.414 1.054 3.414 3.212Zm.894 4.493s-.004-4.636 4.636-4.636c4.883 0 4.199 5.237 4.199 5.237h-6.252c0 2.242 2.124 2.1 2.124 2.1 2.005 0 1.934-1.297 1.934-1.297h2.123c0 3.443-4.128 3.208-4.128 3.208-4.954 0-4.636-4.612-4.636-4.612Zm2.04-5.509h4.978V6.561h-4.978v1.485Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            aria-label="Dribbble"
            target="_blank"
            className="block relative p-4 transition hover: dark:hover:text-white duration-300 before:content-[''] before:rounded-xl hover:block before:absolute before:inset-0 before:opacity-0 before:scale-0 before:-z-[-10] hover:before:opacity-100 before:bg-light-gray/10 hover:before:scale-100 before:transition-all"
            href="https://dribbble.com/eihabkhan"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
            >
              <path
                fill="currentColor"
                d="M7.192 1.009a12.006 12.006 0 0 1 11.566 1.068 17.69 17.69 0 0 1-5.144 4.671 19.543 19.543 0 0 0-6.422-5.74Zm4.771 6.61a17.664 17.664 0 0 0-6.712-5.53A12.045 12.045 0 0 0 .453 8.73a17.55 17.55 0 0 0 4.167.5 17.46 17.46 0 0 0 7.343-1.61ZM24 11.272a11.968 11.968 0 0 0-3.798-8.041 19.55 19.55 0 0 1-5.59 5.07 19.293 19.293 0 0 1 1.565 3.45c2.548-.69 5.21-.852 7.823-.479Zm-7.314 2.254c.342 1.454.515 2.944.514 4.439a19.442 19.442 0 0 1-.703 5.166 12.038 12.038 0 0 0 7.47-9.998 17.615 17.615 0 0 0-7.28.393Zm-2.268-1.207a17.468 17.468 0 0 0-1.431-3.139 19.3 19.3 0 0 1-8.367 1.897c-1.526 0-3.047-.18-4.531-.535a11.977 11.977 0 0 0 4.153 10.601 19.509 19.509 0 0 1 10.176-8.824ZM5.75 22.237a12.014 12.014 0 0 0 8.615 1.531 17.507 17.507 0 0 0 .556-9.665 17.653 17.653 0 0 0-9.17 8.134Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
