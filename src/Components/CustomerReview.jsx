import { reviews } from "../constants";
import { ViewDetailbtn } from "./Buttons";
import { ReviewCard } from "./ShoesCard";
export const CustomerReview = () => {
  return (
    <>
      <section className=" bg-primary  lg:flex justify-center lg:p-[3%] p-[5%]">
        <div className=" lg:w-[40%] text-center">
          <div className="   p-2 ">
            <h2
              className="  sm:text-4xl font-palanquin
           font-semibold text-2xl"
            >
              {" "}
              What our
              <span className=" text-coral-red"> Customer </span>Say
            </h2>
            <p className=" sm:text-2xl text-slate-gray  font-palanquin">{`Real stories, real people, real satisfaction. Browse through and see why our customers keep coming back for more!
`}</p>
          </div>

          {reviews.map((Review) => (
            <div key={Review.customerName}>
              <ReviewCard Review={Review} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export const Subscribe = () => {
  return (
    <>
      <section id="contact-us" className="flex justify-center  ">
        <div>
          <h3 className=" sm:text-4xl font-palanquin font-semibold text-2xl ">
            {" "}
            Sign Up for <span className="text-coral-red">Updates </span>&
            NewsLetter{" "}
          </h3>

          <input
            type="text"
            placeholder="subscribenike@gmail.com"
            className=" border   rounded-[10px] sm:rounded-3xl w-full 
            sm:p-3 p- mt-[5%] p-2 flex"
          />
          <ViewDetailbtn label={"Sign Up"} />
        </div>
      </section>
    </>
  );
};
