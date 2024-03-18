import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import PopularProduct from "./Components/PopularProduct";
import { SuperQuality } from "./Components/SuperQuality";
import Service from "./Components/Service";
import { SpecialOffer } from "./Components/SpecialOffer";
import { CustomerReview, Subscribe } from "./Components/CustomerReview";
export const App = () => {
  return (
    <>
      <main className="">
        <Nav />
        <section className="padding">
          <Hero />
        </section>
        <section className=" padding">
          <PopularProduct />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding">
          <Service />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className=" padding">
          <CustomerReview />
        </section>
        <section className=" padding  ">
          <Subscribe />
        </section>
      </main>
    </>
  );
};
