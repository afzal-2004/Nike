import { ViewDetailbtn } from "./Buttons";
import { shoe8 } from "../assets/images";
export const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className=" sm:p-[3%] p-[5%] xl:flex xl:justify-center items-center"
    >
      <div className="   xl:w-[55%]  ">
        <h1 className="   sm:text-4xl font-palanquin text-3xl font-semibold ">
          We Provide You <span className=" text-coral-red">Super Quality</span>{" "}
          Shoes
        </h1>
        <p className=" text-xl sm:text-2xl sm:mt-[3%] mt-[5%] text-slate-gray">
          Step into superior quality with our meticulously crafted footwear
          collection. Each pair of shoes is a testament to our unwavering
          commitment to excellence, blending style and functionality seamlessly.
          Elevate your stride with unparalleled comfort, durability, and style,
          as you embark on your journey with confidence and flair. Experience
          the epitome of luxury and performance in every step you take.
        </p>
        <ViewDetailbtn label={"viewDetail"} />
      </div>
      <div className=" xl:mt-0  flex justify-center items-center mt-[10%]">
        <img src={shoe8} alt="" />
      </div>
    </section>
  );
};
