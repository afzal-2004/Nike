/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const Buttons = ({ label, iconUrl }) => {
  return (
    <>
      <button className=" flex justify-center items-center px-7 py-4 border rounded-full text-lg bg-coral-red  text-white mt-5">
        {label}
        <img src={iconUrl} alt="Arrow right icon " className=" ml-2 w-5 h-5 " />
      </button>
    </>
  );
};

export default Buttons;
export const ViewDetailbtn = ({ label }) => {
  return (
    <>
      <button className=" flex justify-center items-center px-7 py-4 border rounded-full text-lg bg-coral-red  text-white mt-5">
        {label}
      </button>
    </>
  );
};
export const LearnMore = () => {
  return (
    <>
      <button className=" flex justify-center items-center px-7 py-4 border rounded-full text-lg  mt-5 ">
        Learn More
      </button>
    </>
  );
};
