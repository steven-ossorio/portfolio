import Head from "next/head";
import AboutMe from "../component/about.component";
import Projects from "../component/projects.component";
import Work from "../component/work.component";
import Skills from "../component/skills.component";
import Footer from "../component/footer.component";
import { useState } from "react";

export default function Home() {
  const [topic, setTopic] = useState("aboutme");
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:hidden container w-full mx-auto my-0">
        <AboutMe />
        <Skills />
        <Work />
        <Projects />
        <Footer />
      </div>
      <div className="hidden container lg:grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px] lg:my-0 lg:mx-auto">
        <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
          <div className="container max-w-md md:max-w-2xl xl:max-w-4xl flex flex-col justify-between mx-auto">
            <div className="flex items-center justify-center drop-shadow-xl">
              <img
                className="w-[240px] h-[240px] drop-shadow-xl mx-auto rounded-[20px]"
                src="steven-f1.png"
                alt="placeholder image"
              />
            </div>
            <h3 className="mt-2 mb-2 text-[26px] font-semibold self-center inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg text-black dark:text-white">
              Steven Ossorio
            </h3>
            <h3 className="mb-4 self-center inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg text-[#7B7B7B] dark:text-white">
              Software Engineer
            </h3>
            <div className="flex justify-center space-x-3 items-center">
              <a
                href="https://github.com/steven-ossorio"
                target="_blank"
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                style={{ backgroundColor: "#333" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/steven-ossorio/"
                target="_blank"
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                style={{ backgroundColor: "#0077b5" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
            <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
              <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                <span className="flex h-10 w-10 items-center justify-center bg-white dark:bg-black text-[#E93B81] shadow-md">
                  <svg
                    fill="none"
                    className="h-4 w-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    ></path>
                  </svg>
                </span>
                <div className="text-left ml-2.5">
                  <div className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Phone
                  </div>
                  <div className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    718-581-9131
                  </div>
                </div>
              </div>
              <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                <span className="flex h-10 w-10 items-center justify-center bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                  <svg
                    fill="none"
                    className="h-4 w-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    ></path>
                  </svg>
                </span>
                <div className="text-left ml-2.5">
                  <div className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Email
                  </div>
                  <div className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    usa.s.ossorio@gmail.com
                  </div>
                </div>
              </div>
              <div className="flex py-2.5">
                <span className="flex h-10 w-10 items-center justify-center bg-white dark:bg-black text-[#C17CEB] shadow-md">
                  <svg
                    fill="none"
                    className="h-4 w-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    ></path>
                  </svg>
                </span>
                <div className="text-left ml-2.5">
                  <div className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Location
                  </div>
                  <div className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Houston, TX, USA
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center mt-4 mb-4">
              <a
                href="steven-ossorio.pdf"
                target="_blank"
                type="button"
                className="flex items-center text-white focus:ring-4  font-medium rounded-3xl text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6 pr-1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                  ></path>
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="border-b border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-400">
              <li
                className="mr-2 cursor-pointer"
                onClick={() => setTopic("aboutme")}
              >
                <a
                  className={`${
                    topic == "aboutme"
                      ? " border-b-2 active text-blue-500 border-blue-500"
                      : "border-b-2 border-transparent  border-gray-300 hover:text-gray-300"
                  } inline-flex p-4 rounded-t-lg group`}
                >
                  <svg
                    aria-hidden="true"
                    className={`${
                      topic == "aboutme"
                        ? "text-blue-500"
                        : "text-gray-500 group-hover:text-gray-300"
                    } w-5 h-5 mr-2`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Profile
                </a>
              </li>
              <li
                className="mr-2 cursor-pointer"
                onClick={() => setTopic("work")}
              >
                <a
                  className={`${
                    topic == "work"
                      ? " border-b-2 active text-blue-500 border-blue-500"
                      : "border-b-2 border-transparent  border-gray-300 hover:text-gray-300"
                  } inline-flex p-4 rounded-t-lg group`}
                >
                  <svg
                    aria-hidden="true"
                    className={`${
                      topic == "work"
                        ? "text-blue-500"
                        : " text-gray-500 group-hover:text-gray-300"
                    } w-5 h-5 mr-2`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  Work Experience
                </a>
              </li>
              <li
                className="mr-2 cursor-pointer"
                onClick={() => setTopic("skills")}
              >
                <a
                  className={`${
                    topic == "skills"
                      ? " border-b-2  active text-blue-500 border-blue-500"
                      : "border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300"
                  } inline-flex p-4 rounded-t-lg group`}
                >
                  <svg
                    aria-hidden="true"
                    className={`${
                      topic == "skills"
                        ? "text-blue-500"
                        : "text-gray-500 group-hover:text-gray-300"
                    } w-5 h-5 mr-2`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                  </svg>
                  Skills
                </a>
              </li>
              <li
                className="mr-2 cursor-pointer"
                onClick={() => setTopic("projects")}
              >
                <a
                  className={`${
                    topic == "projects"
                      ? " border-b-2  active text-blue-500 border-blue-500"
                      : "border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300"
                  } inline-flex p-4 rounded-t-lg group`}
                >
                  <svg
                    aria-hidden="true"
                    className={`${
                      topic == "projects"
                        ? "text-blue-500"
                        : "text-gray-500 group-hover:text-gray-300"
                    } w-5 h-5 mr-2`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                  </svg>
                  Projects
                </a>
              </li>
            </ul>
          </div>
          {topic === "aboutme" && (
            <div>
              <div>
                <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
                  <div className="col-span-12 space-y-2.5">
                    <div className="lg:mr-16">
                      <div>
                        <div className="text-4xl mb-4 bold">About Me</div>
                        <hr className="w-48 h-1 my-4 border-0 rounded md:my-10 bg-gray-700" />
                      </div>
                      <p className="text-color-910 leading-7">
                        As a software engineer, I am constantly seeking new
                        challenges and opportunities to grow. I believe that
                        true improvements can only be found when we step outside
                        our comfort zones and face the unknown. Whether it's
                        tackling a complex coding problem or learning a new
                        programming language, I thrive on the excitement and
                        potential for growth that comes with exploring uncharted
                        territory.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {topic === "work" && (
            <div>
              <div>
                <div className="text-4xl mb-4 bold mt-8">Work History</div>
                <hr className="w-48 h-1 my-4 border-0 rounded md:my-10 bg-gray-700" />
              </div>
              <ol className="relative border-l border-gray-700">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                    2021-2022
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Crypto Project - Engineering Manager
                  </h3>
                  <div className="flex flex-row flex-wrap">
                    <div className="flex  flex-wrap justify-center">
                      <div
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
                        data-te-close="true"
                      >
                        NextJS
                      </div>
                    </div>
                    <div className="flex justify-center flex-wrap">
                      <div
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
                        data-te-close="true"
                      >
                        Solidity
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                      <div
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
                        data-te-close="true"
                      >
                        AWS
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                      <div
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
                        data-te-close="true"
                      >
                        Netlify
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                      <div
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
                        data-te-close="true"
                      >
                        Github
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                    2019-2020
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Wayfair - Software Engineer
                  </h3>
                  <div className="flex flex-row flex-wrap">
                    <div className="flex  flex-wrap justify-center">
                      <div
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
                        data-te-close="true"
                      >
                        ReactJS
                      </div>
                    </div>
                    <div className="flex  flex-wrap justify-center">
                      <div
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
                        data-te-close="true"
                      >
                        CSS
                      </div>
                    </div>
                    <div className="flex justify-center flex-wrap">
                      <div
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
                        data-te-close="true"
                      >
                        GraphQL
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                      <div
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
                        data-te-close="true"
                      >
                        Redux
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                      <div
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
                        data-te-close="true"
                      >
                        PHP
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                      <div
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
                        data-te-close="true"
                      >
                        MySQL
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                      <div
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
                        data-te-close="true"
                      >
                        Github
                      </div>
                    </div>
                  </div>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                    2015-2017
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Don Karpov - Production Assistant
                  </h3>
                  <div className="flex flex-row flex-wrap">
                    <div className="flex  flex-wrap justify-center">
                      <div
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
                        data-te-close="true"
                      >
                        PowerDirector
                      </div>
                    </div>
                    <div className="flex justify-center flex-wrap">
                      <div
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
                        data-te-close="true"
                      >
                        Adobe Premiere Pro
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                      <div
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
                        data-te-close="true"
                      >
                        DropBox
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          )}
          {topic === "skills" && <Skills />}
          {topic === "projects" && <Projects />}
        </div>
      </div>
    </>
  );
}
