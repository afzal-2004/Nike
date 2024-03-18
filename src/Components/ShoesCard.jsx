/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { star } from "../assets/icons";
export const ShoesCard = ({ imgUrl, changeBigShoeImage, bigShoesImg }) => {
  const handelClicked = () => {
    if (bigShoesImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };
  return (
    <>
      <div
        className={`border-2 rounded-xl ${
          bigShoesImg === imgUrl.bigShoe
            ? "border-coral-red  scale-110  transition-tranform duration-300"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handelClicked}
      >
        <div className="flex justify-center items-center bg-card bg-center rounded-lg  sm:w-full">
          <img src={imgUrl.bigShoe} alt="image" width={147} height={147} />
        </div>
      </div>
    </>
  );
};

export const Shoes = ({ Product }) => {
  return (
    <>
      <section
        className=" m-[7px]
      "
      >
        <div
          className={` hover:scale-105  transform transition duration-300 ease-in-out`}
        >
          {Product && (
            <>
              <img src={Product.imgURL} alt="" />

              <section className=" flex mt-3">
                <img src={star} alt="rating" className="" />
                <p className=" text-slate-gray font-palanquin  ml-[5px]">
                  (4.5)
                </p>
              </section>
              <h1 className="font-semibold">{Product.name}</h1>
              <p className=" text-coral-red">{Product.price}</p>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export const ServiceCard = ({ ProvideService }) => {
  return (
    <>
      <section className=" bg-white-400   shadow-2xl mt-5   sm:p-[7%] p-[10%]  rounded-2xl m-[5%]  lg:py-[15%] ">
        {ProvideService && (
          <div>
            <>
              <img
                src={ProvideService.imgURL}
                alt="png"
                className="  bg-coral-red  p-4 rounded-full"
              />

              <h1 className="  font-semibold mt-2  lg:text-2xl  text-xl font-palanquin">
                {ProvideService.label}
              </h1>
              <p className=" mt-[5%] text-slate-gray font-montserrat   ">
                {ProvideService.subtext}
              </p>
            </>
          </div>
        )}
      </section>
    </>
  );
};

export const ReviewCard = ({ Review }) => {
  return (
    <>
      <section className=" mt-[5%]">
        <div className=" flex justify-center ">
          <img
            src={Review.imgURL}
            alt=""
            width={120}
            className=" rounded-full"
          />
        </div>
        <div className="  lg:flex justify-center">
          <p className=" lg:w-[70%]  text-center sm:text-2xl  mt-[5%] text-slate-gray font-palanquin">
            {Review.feedback}
          </p>
        </div>
        <div className="  flex space-x-2 justify-center font-semibold mt-[3%]">
          <img src={star} alt="" />
          <span>({Review.rating})</span>
        </div>

        <p className=" text-center font-bold  sm:text-3xl font-palanquin">
          {Review.customerName}
        </p>
      </section>
    </>
  );
};
