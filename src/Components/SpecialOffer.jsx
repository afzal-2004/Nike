import Buttons, { LearnMore } from "./Buttons";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
export const SpecialOffer = () => {
  return (
    <section className=" sm:p-[3%] p-[5%]  ">
      <>
        <div className="  lg:flex flex-reverse  justify-center items-center ">
          <div className="">
            <img src={offer} alt="" />
          </div>
          <section className="lg:w-3/6 lg:mt-0 mt-[5%]">
            <h1 className=" sm:text-4xl font-palanquin  font-semibold text-3xl leading-10">
              <span className=" text-coral-red  tracking-wide ">Special</span>
              Offer
            </h1>

            <p className=" font-palanquin mt-[3%]    text-slate-gray sm:text-2xl  ">
              {`
        Step into style with our exclusive Nike Special Offer! Elevate your athletic wardrobe with cutting-edge designs and high-performance gear. Unleash your full potential with top-of-the-line footwear, apparel, and accessories, all crafted to meet the demands of your active lifestyle. Whether you're hitting the gym, pounding the pavement, or just embracing casual comfort, Nike has you covered. Don't miss out on this limited-time opportunity to score unbeatable deals on your favorite Nike essentials. Shop now and experience the perfect fusion of fashion and function with Nike.`}
            </p>
            <div className=" flex sm:space-x-4 space-x-2">
              <Buttons label={"Shop now"} iconUrl={arrowRight} />
              <LearnMore />
            </div>
          </section>
        </div>
      </>
    </section>
  );
};
