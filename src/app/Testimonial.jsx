'use client'
import Image from "next/image";
import React ,{useState} from "react";
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import HowToRegIcon from '@mui/icons-material/HowToReg';
// import Carousel from "react-elastic-carousel";






const Testimonial = () => {

  const [state ,setState]=useState(false)

  const handleclick =()=>{
    console.log(state)
    setState(!state);
  }

    
  return (
    <div className=" bg-midnight ">
      <div className=" text-3xl md:text-5xl font-bold text-white text-center mb-6">Testimonial 
      <p className=" absolute inline-block text-sm right-3 cursor-pointer mr-3 hover:scale-105  shadow-2xl text-semi-blue   " onClick={handleclick}><CalendarViewMonthIcon className="px-1"/>View All...</p> 
      </div>
      <div className="  w-5/6 mx-auto flex flex-wrap justify-between   gap-3  shadow-lg m-2 mb-0  ">

      {/* <div className=" w-full sm:w-3/12 border-r-2 border-b-2 border-semi-blue  inline-block   text-white bg-midnight p-3">
          <div className=" flex gap-3 mb-3 bg-semi-blue text-midnight rounded-md ">
              <div className=" h-[50px] w-[50px] relative ">
                  <Image src={'/doctor.png'} fill alt="avatar" className=" aspect-square rounded-full"/>

              </div>
              <div className="">
                  <p>Sachin</p>
                  <p> <HowToRegIcon/> </p>
              </div>
          </div>
          <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates nihil quam eos optio, a nostrum cum pariatur nobis sint officiis adipisci impedit. Distinctio quos omnis magni beatae molestiae esse asperiores!
          </div>
      </div> */}
      {/* <div className=" w-full sm:w-3/12  border-r-2 border-b-2 border-semi-blue  inline-block   text-white bg-midnight p-3">
          <div className=" flex gap-3 mb-3 ">
              <div className=" h-[50px] w-[50px] relative ">
                  <Image src={'/doctor.png'} fill alt="avatar" className=" aspect-square rounded-full"/>

              </div>
              <div className="">
                  <p>Sachin</p>
                  <p> <HowToRegIcon/> </p>
              </div>
          </div>
          <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates nihil quam eos optio, a nostrum cum pariatur nobis sint officiis adipisci impedit. Distinctio quos omnis magni beatae molestiae esse asperiores!
          </div>
      </div> */}
      {/* <div className="  w-full sm:w-3/12  border-r-2 border-b-2 border-semi-blue  inline-block   text-white bg-midnight p-3">
          <div className=" flex gap-3 mb-3 ">
              <div className=" h-[50px] w-[50px] relative ">
                  <Image src={'/doctor.png'} fill alt="avatar" className=" aspect-square rounded-full"/>

              </div>
              <div className="">
                  <p>Sachin</p>
                  <p> <HowToRegIcon/> </p>
              </div>
          </div>
          <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates nihil quam eos optio, a nostrum cum pariatur nobis sint officiis adipisci impedit. Distinctio quos omnis magni beatae molestiae esse asperiores!
          </div>
      </div> */}
      {/* <div className="  w-full sm:w-3/12 border-r-2 border-b-2 border-semi-blue  inline-block   text-white bg-midnight p-3">
          <div className=" flex gap-3 mb-3 ">
              <div className=" h-[50px] w-[50px] relative ">
                  <Image src={'/doctor.png'} fill alt="avatar" className=" aspect-square rounded-full"/>

              </div>
              <div className="">
                  <p>Sachin</p>
                  <p> <HowToRegIcon/> </p>
              </div>
          </div>
          <div>
              It was a very good experience using the website
          </div>
      </div> */}
        {
          state?( <div className="  w-full sm:w-3/12  border-r-2 border-b-2 border-semi-blue  inline-block   text-white bg-midnight p-3">
          <div className=" flex gap-3 mb-3 ">
              <div className=" h-[50px] w-[50px] relative ">
                  <Image src={'/doctor.png'} fill alt="avatar" className=" aspect-square rounded-full"/>

              </div>
              <div className="">
                  <p>Sachin</p>
                  <p> <HowToRegIcon/> </p>
              </div>
          </div>
          <div>
          It was a very good experience using the website
          </div>
      </div>):('')
        }
      
      
       

      </div>
    </div>
  );
};

export default Testimonial;
