


const SectionTitle = ({ title }) => {
    return (
        <div>
            <span className="relative flex justify-center mt-20 mb-10 font-bold">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-75"
                ></div>

                <span className="relative z-10  px-6 text-2xl text-[#0077b6] font-montserrat">{title}</span>
            </span>
        </div>
    );
};

export default SectionTitle;