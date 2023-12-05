import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];

const Addservice = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div>
      <form>
        <div className="bg-white w-full md:flex lg:flex p-10 rounded-md">
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-md font-semibold">
                  Service Title
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-md font-semibold">
                    Description
                  </span>
                </div>
              </label>
              <textarea
                placeholder="Enter Description"
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              ></textarea>
            </div>
          </div>
          <div className="ps-5 mt-2">
            <label>
              <span className="label-text text-md font-semibold">
                Image
              </span>
            </label>
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
          </div>
        </div>
        <div className="flex md:justify-end sm:justify-center mt-2">
          <input type="submit" className="btn bg-pink-500" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Addservice;
