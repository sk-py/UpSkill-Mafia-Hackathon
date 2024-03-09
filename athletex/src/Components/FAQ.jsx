"use client";

const FAQ = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
          Frequently asked questions.
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                What sports are covered by AtheleteX?
              </h1>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                AthleteX is a platform that caters to a diverse range of
                sporting interests, including but not limited to basketball,
                soccer, tennis, volleyball, swimming, cycling, and more. We
                strive to create a community that encompasses a wide variety of
                sports, welcoming users of all interests to join our platform
                irrespective of their individual sporting preferences.
              </p>
            </div>
          </div>
          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                How can I find people with similar sports interests near me?
              </h1>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Our platform offers various search and filtering options to help
                you connect with like-minded individuals in your area. You can
                search based on sports interests, location, age group, skill
                level, and more to find the perfect match for your sporting
                activities.
              </p>
            </div>
          </div>
          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                Are there any events happening related to my favorite sport?
              </h1>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                AthleteX features a dedicated events section for your favorite
                sports. Discover upcoming tournaments, matches, and meetups, and
                get personalized recommendations based on your interests and
                location. Enhance your sports experience with ease.
              </p>
            </div>
          </div>

          {/* Repeat similar structure for other FAQ items */}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
