import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (

    <div className="my-8 lg:my-16 px-4 sm:px-8 md:px-16 lg:px-32">
  <h2 className="text-2xl sm:text-3xl text-center font-bold mb-8 sm:mb-12 lg:mb-16">Testimonials</h2>
  <Swiper
    slidesPerView={1}
    spaceBetween={10}
    pagination={{ clickable: true }}
    modules={[Pagination]}
    className="mySwiper"
    breakpoints={{
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
      },
    }}
  >
    {reviews.map((review) => (
      <SwiperSlide className="grid sm:grid-cols-2 lg:grid-cols-3 space-y-5" key={review._id}>
        <div className="card"></div>
        <div className="card-body">
        <div className="flex gap-3">
            <figure>
              <img
                className="rounded-3xl w-8 sm:w-10"
                src={review.picture}
                alt=""
              />
            </figure>
            <div>
              <p className="card-title">{review.name}</p>
              <h3 className="font-semibold">{review.company}</h3>
            </div>
          </div>
        </div>
        <div>
          <p>{review.about}</p>
          <div style={{ display: "flex" }}>
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                style={{
                  fontSize: "1rem",
                  color: index < review.rating ? "gold" : "gray",
                }}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
 
  )}
export default Testimonials;