// import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import Features from "./Features";
import Additional from "./Additional";
import Testimonial from "./Testimonial";
import Contactme from "./Contact";
// import Footer from "@/components/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <div className="relative md:h-screen h-[800px]  bg-midnight  ">
        <Image
          src={"/bc-1.jpg"}
          fill
          alt="bc"
          className=" -z-40 blur-sm  object-cover shadow-none"
        />
        {/* <Navbar /> */}
        <div className="  flex w-10/12 h-[700px] mx-auto justify-betweem items-center   ">
          <div className=" w-1/2 flex-col gap-5 items-center  ">
            {" "}
            <p className=" text-7xl  text-white font-bold ">
              Nurturing wellness One click at a time
            </p>
            <p className=" mb-4 text-white text-wrap font-medium">
              Embarking on a journey of well-being, Nurturing Wellness One click
              at a time envisions a world where health is just a click away.
            </p>
            <button className=" bg-semi-blue mt-4 px-4 py-2  rounded-lg tracking-wide font-bold ">
              Start{" "}
            </button>
          </div>
          <div className=" w-1/2 ">
            {" "}
            <div className=" relative z-5 h-[600px] ">
              <Image
                src={"/doctor.png"}
                fill
                alt="doctor"
                className=" rotate-360 object-cover object-top "
              />
            </div>
          </div>
        </div>
      </div>
      <Features/>
     
      {/* <Additional/> */}
      <Testimonial/>
      <Contactme/>
      <hr className=" bg-white h-1 "></hr>
      {/* <Footer/> */}
    </div>
  );
};

export default LandingPage;
