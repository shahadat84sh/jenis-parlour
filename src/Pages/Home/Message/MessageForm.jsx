const MessageForm = () => {
  return (
    <div className="px-32 py-16 bg-[#FFF8F5]">
      <h2 className="text-3xl text-center font-bold mb-20">
        Let us handle your project, professionally.
      </h2>
      <form className="w-3/4 mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full sm:w-1/2"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full sm:w-1/2 mt-4 sm:mt-0"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center mt-8">
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full sm:w-1/2"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="input input-bordered w-full sm:w-1/2 mt-4 sm:mt-0"
          />
        </div>
        <div className="my-5">
          <textarea
            className="textarea w-full mx-auto textarea-primary"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="flex justify-center items-center">
          <input
            type="submit"
            value="Send Message"
            className="btn bg-pink-500 w-full sm:w-auto"
          />
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
