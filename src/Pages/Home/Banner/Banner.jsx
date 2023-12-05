import banner from '../../../assets/images/firstbanner.png'
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-[#FFF8F5] pt-32">
      <div className="hero-content px-32 flex-col lg:flex-row-reverse">
        <div>
        <img
          src={banner}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        </div>
        <div>
          <h1 className="text-5xl font-bold uppercase">Beauty Saloon <br /> for every women</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-pink-500 text-white">Get an Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
