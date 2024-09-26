

const ReviewForm = () => {
    return (
        <div className="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4 w-full md:w-1/2 mx-auto">
            <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                className="w-full border border-[#CAF0F8] rounded-lg p-3 text-xs md:text-lg"
                placeholder="Name"
                type="text"
                id="name"
                />
            </div>

            <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                className="w-full border border-[#CAF0F8] rounded-lg p-3 text-xs md:text-lg"
                placeholder="Email address"
                type="email"
                id="email"
                />
            </div>

            <div>
                <label className="sr-only border-" htmlFor="message">Message</label>

                <textarea
                className="w-full border border-[#CAF0F8] rounded-lg  p-3 text-xs md:text-lg"
                placeholder="Message"
                rows="8"
                id="message"
                ></textarea>
            </div>

            <div className="mt-4 text-center"> 
                <button
                type="submit"
                className="text-xs md:text-base inline-block w-1/2 md:w-full border-2 text-[#0077B6] hover:text-white border-[#0077B6] rounded-lg bg-[#90E0EF] hover:bg-[#00B4D8] px-3 py-1 md:px-5 md:py-3 font-medium"
                >
                Submit Review
                </button>
            </div>
            </form>
      </div>
    );
};

export default ReviewForm;