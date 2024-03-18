import { services } from "../constants";
import { ServiceCard } from "./ShoesCard";
const Service = () => {
  return (
    <>
      <div className="     sm:grid  lg:grid-cols-3 cursor-pointer ">
        {services.map((Data) => (
          <div key={Data.label}>
            <ServiceCard ProvideService={Data} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
