const projectsData = [
  {
    title: "Jobs",
    description:
      "The website includes a job search functionality with filters for location, experience level, and whether the candidate has been recently laid off. I implemented a card style job/candidate viewing interface to provide a seamless and interactive experience for users. I also developed candidate profiles that include resumes, work history, education, skills, and other relevant information. Additionally, I built a dashboard for recruiters to manage job postings, track candidate applications, and communicate with candidates.",
    imageUrl: "",
    imageAlt: "Jobs Project",
    tags: [
      "ReactJS",
      "Tailwind CSS",
      "GraphQL",
      "NodeJS",
      "PostgreSQL",
      "Netlify",
      "Github",
    ],
    links: {
      github: "https://github.com/steven-ossorio/jobs",
      website: "",
    },
    inDevelopment: true,
  },
  {
    title: "Clothing site",
    description:
      "An eCommerce clothing site. The development will be continous as further improvement are done over the course of the year",

    imageUrl: "",
    imageAlt: "Clothing App",
    tags: ["ReactJS", "Redux", "Styled-Components", "Firebase", "Stripe"],
    links: {
      github: "https://github.com/steven-ossorio/basic_ecommerce",
      website: "https://keen-croissant-503685.netlify.app",
    },
    inDevelopment: false,
  },
];

const TagsContainer = ({ tags }) => {
  return (
    <div className="flex flex-row flex-wrap">
      {tags.map((tagItem) => {
        return (
          <div class="flex  flex-wrap justify-center" key={tagItem}>
            <div
              data-te-chip-init
              data-te-ripple-init
              class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
              data-te-close="true"
            >
              {tagItem}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Project = ({
  title,
  description,
  inDevelopment,
  tags,
  links: { github, website },
}) => {
  return (
    <div className="mb-12 max-w-sm mb-30 border rounded-lg shadow border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>
        <p class="mb-3 font-normal text-neutral-200">{description}</p>
        {inDevelopment && (
          <div
            class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div class="flex">
              <div class="py-1">
                <svg
                  class="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p class="font-bold">Our privacy policy has changed</p>
                <p class="text-sm">
                  Make sure you know how these changes affect you.
                </p>
              </div>
            </div>
          </div>
        )}
        {github && (
          <button
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
          </button>
        )}
        {website && (
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mb-2 ml-3 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            style={{ backgroundColor: "#333" }}
          >
            <svg
              className="h-4 w-4"
              data-darkreader-inline-stroke=""
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              ></path>
            </svg>
          </button>
        )}
        <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tech Stack
        </h6>
        <TagsContainer tags={tags} />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="container max-w-md md:max-w-2xl xl:max-w-4xl pl-4 pr-4 mb-4 mt-4 lg:p-0 lg:m-0">
      <div className="pt-12 md:py-12 sm:px-5 md:px-10 lg:px-14">
        <div className="text-4xl mb-4 bold lg:mt-8">Projects</div>
        <hr class="w-48 h-1 my-4 bg-red-600 border-0 rounded md:my-10 dark:bg-gray-700" />
      </div>
      <div className=" mx-auto grid grid-cols-1 md:max-w-2xl md:grid-cols-2 gap-3 xl:gap-y-6 xl:gap-x-32 xl:grid-cols-3 xl:max-w-4xl justify-items-center mt-5">
        {projectsData.map((data) => {
          return <Project key={data.title} {...data} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
