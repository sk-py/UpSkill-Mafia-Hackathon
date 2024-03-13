const page = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
              <img
                className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                src="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXRobGV0aWN8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div>
                <p className="mt-6 text-sm text-blue-500 uppercase">
                  Want to know
                </p>
                <h1 className="max-w-md mt-4 text-xl font-semibold leading-tight text-gray-800 dark:text-white">
                  Join us for the adrenaline-fueled Sprinting Championship,
                  where athletes from around the nation will compete for glory
                  and honor! Experience the thrill of speed at our Sprinting
                  Extravaganza, featuring top-notch athletes showcasing their
                  agility and prowess on the track. Get ready to witness the
                  ultimate showdown of speed at the Sprinting Spectacular, where
                  every stride counts and champions are made!
                </h1>
                <div className="flex items-center mt-6">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""
                  />
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">
                      Amelia. Anderson
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Lead Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
              <div>
                <h3 className="text-blue-500 capitalize">Mumbai Marathon</h3>
                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  Organised by TCS and Tata Group Of Companies
                </a>
              </div>
              <hr className="my-6 border-gray-200 dark:border-gray-700" />
              {/* <div>
                <h3 className="text-blue-500 capitalize">UI Resource</h3>
                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  Should you creat UI Product by using Blox?
                </a>
              </div>
              <hr className="my-6 border-gray-200 dark:border-gray-700" />
              <div>
                <h3 className="text-blue-500 capitalize">Premium Collection</h3>
                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  Top 10 Blocks you can get on Blox's collection.
                </a>
              </div>
              <hr className="my-6 border-gray-200 dark:border-gray-700" />
              <div>
                <h3 className="text-blue-500 capitalize">Premium kits</h3>
                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  Top 10 Ui kit you can get on Blox's collection.
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
