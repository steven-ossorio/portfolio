import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

const Work = () => {
  return (
    <div className="container max-w-md md:max-w-2xl xl:max-w-4xl pl-5 mb-4 mt-4">
      <div className="pt-12 md:py-12 sm:px-5 md:px-10 lg:px-14">
        <div className="text-4xl mb-4 bold">Work Experience</div>
        <hr class="w-48 h-1 my-4 bg-red-600 border-0 rounded md:my-10 dark:bg-gray-700" />
      </div>
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2021-2022
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Crypto Project - Engineering Manager
          </h3>
          <div className="flex flex-row flex-wrap">
            <div class="flex  flex-wrap justify-center">
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true"
              >
                NextJS
              </div>
            </div>
            <div class="flex justify-center flex-wrap">
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true"
              >
                Solidity
              </div>
            </div>
            <div class="flex flex-wrap justify-center">
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true"
              >
                AWS
              </div>
            </div>
            <div class="flex flex-wrap justify-center">
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true"
              >
                Netlify
              </div>
            </div>
            <div class="flex flex-wrap justify-center">
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true"
              >
                Github
              </div>
            </div>
          </div>
        </li>
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2019-2020
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Wayfair - Software Engineer
          </h3>
          <div className="flex flex-row flex-wrap">
            <div class="flex  flex-wrap justify-center">
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true"
              >
                ReactJS
              </div>
            </div>
            <div class="flex  flex-wrap justify-center">
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true"
              >
                CSS
              </div>
            </div>
            <div class="flex justify-center flex-wrap">
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true"
              >
                GraphQL
              </div>
            </div>
            <div class="flex flex-wrap justify-center">
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true"
              >
                Redux
              </div>
            </div>
            <div class="flex flex-wrap justify-center">
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true"
              >
                PHP
              </div>
            </div>
            <div class="flex flex-wrap justify-center">
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true"
              >
                MySQL
              </div>
            </div>
            <div class="flex flex-wrap justify-center">
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true"
              >
                Github
              </div>
            </div>
          </div>
        </li>
        <li class="ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2015-2017
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Don Karpov - Production Assistant
          </h3>
          <div className="flex flex-row flex-wrap">
            <div class="flex  flex-wrap justify-center">
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true"
              >
                PowerDirector
              </div>
            </div>
            <div class="flex justify-center flex-wrap">
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true"
              >
                Adobe Premiere Pro
              </div>
            </div>
            <div class="flex flex-wrap justify-center">
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true"
              >
                DropBox
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Work;
