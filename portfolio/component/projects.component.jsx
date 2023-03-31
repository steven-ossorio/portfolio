const projectsData = [
  {
    title: "Jobs",
    description:
      "The website includes a job search functionality with filters for location, experience level, and whether the candidate has been recently laid off. I implemented a card style job/candidate viewing interface to provide a seamless and interactive experience for users. I also developed candidate profiles that include resumes, work history, education, skills, and other relevant information. Additionally, I built a dashboard for recruiters to manage job postings, track candidate applications, and communicate with candidates.",
    imageUrl: "",
    imageAlt: "Jobs Project",
    tags: [
      "NextJS",
      "TypeScript",
      "Next-Auth",
      "OAuth",
      "Tailwind CSS",
      "GraphQL",
      "Express",
      "PostgreSQL",
      "Vercel",
      "Github",
    ],
    links: {
      github: "https://github.com/steven-ossorio/jobs",
      website: "https://jobs-frontend-steven-ossorio.vercel.app/",
    },
    inDevelopment: true,
  },
  // {
  //   title: "Clothing site",
  //   description:
  //     "An eCommerce clothing site. Updates to follow once competition of Jobs main MVP has been completed.",

  //   imageUrl: "",
  //   imageAlt: "Clothing App",
  //   tags: ["ReactJS", "Redux", "Styled-Components", "Firebase", "Stripe"],
  //   links: {
  //     github: "https://github.com/steven-ossorio/basic_ecommerce",
  //     website: "https://keen-croissant-503685.netlify.app",
  //   },
  //   inDevelopment: false,
  // },
];

const TagsContainer = ({ tags }) => {
  return (
    <div className="flex flex-row flex-wrap">
      {tags.map((tagItem) => {
        return (
          <div className="flex  flex-wrap justify-center" key={tagItem}>
            <div
              data-te-chip-init
              data-te-ripple-init
              className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-neutral-600 text-neutral-200"
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
    <div
      className="mb-12 max-w-sm mb-30 border rounded-lg shadow border-gray-700"
      style={{ backgroundColor: "#1D1D1D", margin: "1%" }}
    >
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-neutral-200">{description}</p>
        {inDevelopment && (
          <div
            className="flex items-center bg-blue-500 text-white text-sm font-bold py-2 mt-6 mb-6"
            role="alert"
            style={{ backgroundColor: "#0177B5" }}
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
            </svg>
            <p>
              Project is in constant development. For goals/tasks, please check
              GitHub page.
            </p>
          </div>
        )}
        {github && (
          <a
            href={github}
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
        )}
        {website && (
          <a
            href={website}
            target="_blank"
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
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              ></path>
            </svg>
          </a>
        )}
        <h6 className="mb-2 text-2xl font-bold tracking-tight text-white">
          Tech Stack
        </h6>
        <TagsContainer tags={tags} />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="container max-w-md md:max-w-2xl xl:max-w-4xl pl-4 pr-4 mb-4 mt-4 lg:p-0 lg:m-0"
    >
      <div>
        <div className="text-4xl mb-4 bold lg:mt-8">Projects</div>
        <hr className="w-48 h-1 my-4 bg-red-600 border-0 rounded dark:bg-gray-700" />
      </div>
      <div className=" mx-auto grid grid-cols-1 md:max-w-2xl md:grid-cols-2 gap-3 xl:max-w-4xl justify-items-center mt-5">
        {projectsData.map((data) => {
          return <Project key={data.title} {...data} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
