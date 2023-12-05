import service1 from "../../../assets/icons/Group 1372.png";
import service2 from "../../../assets/icons/Group 1373.png";
import service3 from "../../../assets/icons/Group 1374.png";

const Services = () => {
  return (
    <div className="m-24">
      <h1 className="text-center text-3xl font-bold mb-20">
        Our Awesome <span className="text-pink-500">Services</span>
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 space-y-5">
        <div className="card w-[300px] bg-white">
          <div className="card-body items-center text-center shadow-md hover:shadow-2xl">
            <h2 className="card-title">
              <img className="w-16" src={service1} alt="" />
            </h2>
            <p className="capitalize text-md font-semibold">
              anti age face treatment
            </p>
            <p className="text-pink-500">$199</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia, illum omnis cumque delectus inventore officia?
            </p>
          </div>
        </div>
        <div className="card w-[300px] bg-white">
          <div className="card-body items-center text-center shadow-md hover:shadow-2xl">
            <h2 className="card-title">
              <img className="w-16" src={service2} alt="" />
            </h2>
            <p className="capitalize text-md font-semibold">
              hair color & styling
            </p>
            <p className="text-pink-500">$99</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia, illum omnis cumque delectus inventore officia?
            </p>
          </div>
        </div>
        <div className="card w-[300px] bg-white">
          <div className="card-body items-center text-center shadow-md hover:shadow-2xl">
            <h2 className="card-title">
              <img className="w-16" src={service3} alt="" />
            </h2>
            <p className="capitalize text-md font-semibold">
              skin care & treatment
            </p>
            <p className="text-pink-500">$299</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia, illum omnis cumque delectus inventore officia?
            </p>
          </div>
        </div>
      </div>
      <div className="card-actions flex justify-center mt-5">
      <button className="btn bg-pink-500 text-white hover:bg-transparent hover:text-black">Explore More</button>
    </div>
    </div>
  );
};

export default Services;
