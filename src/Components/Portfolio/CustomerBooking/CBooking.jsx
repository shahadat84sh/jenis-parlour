import React from "react";
import face from '../../../assets/icons/Group 1372.png'

const CBooking = () => {
  return (
    <div className="w-full px-10">
    <div className="grid sm:grid-flow-col-1 md:grid-cols-2 lg:grid-flow-col-3">
      <div className="card w-80 mb-10 me-5 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-between">
            <figure>
                <img src={face} className="w-12" alt="" />
            </figure>
            <button className="btn bg-sky-300 hover:bg-pink-300 btn-sm">Pending</button>
          </div>
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div className="card w-80 mb-10 me-5 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-between">
            <figure>
                <img src={face} className="w-12" alt="" />
            </figure>
            <button className="btn bg-sky-300 hover:bg-pink-300 btn-sm">Pending</button>
          </div>
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div className="card w-80 mb-10 me-5 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-between">
            <figure>
                <img src={face} className="w-12" alt="" />
            </figure>
            <button className="btn bg-sky-300 hover:bg-pink-300 btn-sm">Pending</button>
          </div>
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CBooking;
