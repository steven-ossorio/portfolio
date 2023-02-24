const Resume = () => {
  return (
    <div>
      <div className="container max-w-md md:max-w-2xl xl:max-w-4xl flex flex-col justify-between mx-auto">
        <div className="pt-12 md:py-12 sm:px-5 md:px-10 lg:px-14">
          <div className="text-5xl p-5 bold">Resume</div>
          <hr class="hidden md:block w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="fa-solid text-6xl text-[#F95054] fa-graduation-cap">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  ></path>
                </svg>
              </div>
              <h4 className="text-3xl dark:text-white font-medium">
                Education
              </h4>
            </div>
            <div className="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
              <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                2021-2022
              </span>
              <h3 className="text-xl dark:text-white">Commpany</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
