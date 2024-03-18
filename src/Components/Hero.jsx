import { arrowRight } from "../assets/icons";
import Buttons from "./Buttons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { ShoesCard } from "./ShoesCard";
import { useState } from "react";
const Hero = () => {
  const [bigShoesImage, setBigShoesImage] = useState(bigShoe1);
  const handelClickShoes = (shoe) => {
    setBigShoesImage(shoe);
  };
  return (
    <>
      <section
        id="home"
        className="w-full  p-2 xl:flex-row flex-col justify-center  gap-10  relative xl:flex  "
      >
        <div
          className=" relative xl:w-3/6 flex flex-col justify-center items-start w-full max-xl:padding-x  sm:pt-28     
      min-h-screen   pl-3 "
        >
          <p className="sm:text-2xl text-xl  text-coral-red">
            Our Summer Collection
          </p>
          <h1
            className=" sm:mt-10  sm:text-8xl font-palanquin max-sm:text-[35px] 
           mt-4 font-bold sm:leading-[82px] leading-10 text-3xl"
          >
            <span className="">New Arrival Items</span>
            <br />
            <span className="text-coral-red  sm:mt-5 inline-block mr-3">
              Nike
            </span>
            Shoes
          </h1>
          <p className=" sm:mt-5 text-[20px] mt-10 sm:text-2xl  font-palanquin">
            Discover Stylish nike arrivals Quality omfort And innovation for
            your active life.
          </p>
          <Buttons label="Shop now " iconUrl={arrowRight} />
          <div className=" flex justify-start items-start flex-wrap w-full sm:mt-20 mt-10  sm:gap-16 gap-7">
            {statistics.map((data) => (
              <h1 key={data.label}>
                <p className="  sm:text-4xl text-3xl font-bold font-palanquin">
                  {data.value}
                </p>
                <p className=" leading-7 text-slate-gray">{data.label}</p>
              </h1>
            ))}
          </div>
        </div>
        <div className="flex-1 sm:flex justify-center  items-center bg-primary bg-hero bg-cover    mt-0  relative   sm:min-h-screen">
          <img
            src={bigShoesImage}
            alt="shoes Collection"
            width={500}
            height={600}
            className=" relative object-contain   z-10 w-[95%] "
          />
          <div
            className="flex sm:absolute   
          sm:-bottom-[5%] sm:gap-6 gap-4 mt-4 sm:mt-0"
          >
            {shoes.map((shoe) => (
              <div key={shoe.thumbnail}>
                <ShoesCard
                  imgUrl={shoe}
                  changeBigShoeImage={(shoe) => handelClickShoes(shoe)}
                  bigShoesImg={bigShoesImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
