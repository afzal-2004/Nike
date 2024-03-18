import { Shoes } from "./ShoesCard";
import { products } from "../constants";
const PopularProduct = () => {
  return (
    <>
      <section
        id="products"
        className="  min-h-screen   
        mt-[15%] p-[5%] sm:p-[2%]  "
      >
        <h1
          className=" sm:mt-10  sm:text-8xl font-palanquin max-sm:text-[35px] 
           mt-4 font-bold sm:leading-[110px] leading-10 text-3xl"
        >
          Our
          <span className=" text-coral-red"> Popular</span> Product{" "}
        </h1>
        <p className=" sm:mt-[5%] text-[20px] mt-10 sm:text-2xl  font-palanquin">{`"Experience the pinnacle of performance with our latest Nike collection. From sleek running shoes engineered for speed to stylish activewear designed for maximum comfort, our popular products embody the essence of athleticism and innovation. Elevate your workout routine and conquer every challenge with confidence, supported by Nike's unmatched quality and cutting-edge technology."`}</p>
        <div className="   grid   lg:grid-cols-4   sm:mt-[5%] mt-[10%] grid-cols-2  sm:w-full  sm:justify-evenly    cursor-pointer">
          {products.map((shoes) => (
            <div key={shoes.name}>
              <Shoes Product={shoes} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularProduct;
