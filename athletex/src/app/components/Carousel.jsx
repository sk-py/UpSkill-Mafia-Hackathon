import ScrollCarousel from "scroll-carousel-react";
const Carousel = () => {
  const ImagesArray = [
    "https://sportsinclusion.eu/wp-content/uploads/2019/10/3EA4D385-39B1-46F5-A6DF-EA76EB9F5FE3.jpeg",
    "https://svjctsportsacademy.com/wp-content/uploads/2017/02/Mega_Sports_Event_2016_4888.jpg",
    "https://svjctsportsacademy.com/wp-content/uploads/2017/02/Mega_Sports_Event_2016_5219.jpg",
    "https://svjctsportsacademy.com/wp-content/uploads/2017/02/Mega_Sports_Event_2016_4920.jpg",
    "https://static.pib.gov.in/WriteReadData/userfiles/image/image0016FQ8.jpg",
    "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/129B9/production/_122571267_guardian.png",
    "https://wildcattimes.files.wordpress.com/2014/01/new-picture-12.png",
  ];
  return (
    <div className="w-[98vw] my-14 py-20 ">
      <span className=" w-[80%] text-center">
        <p className="text-center text-2xl font-bold ">
          {" "}
          Don't miss out on your chance to shine!
        </p>
        <p className="lg:w-[60%] w-[90%] mx-auto my-8 text-slate-600 dark:text-slate-200 ">
          Discover upcoming events and competitions, Engage with like-minded
          individuals and showcase your skills and talents. Take the first step
          towards success and achieve your goals. So what are you waiting for?
          Start exploring and discover what's waiting for you!
        </p>
      </span>
      <div className="w-[80%] m-auto">
        <ScrollCarousel
          autoplay
          autoplaySpeed={4}
          speed={10}
          //   onReady={() => console.log("I am ready")}
        >
          {ImagesArray.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-2 rounded h-52 w-64 object-cover "
            >
              <img
                src={item}
                alt={`Carousel image - ${index}`}
                className="w-full h-full rounded-lg "
              />
            </div>
          ))}
        </ScrollCarousel>
      </div>
    </div>
  );
};

export default Carousel;
