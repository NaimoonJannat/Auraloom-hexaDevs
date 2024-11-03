


const SectionTitle = ({ title }) => {
    return (
        <div>
            <div className="flex items-center justify-center mt-20 mb-10">
                <div className="w-1/5 h-[2px] bg-gradient-to-l from-base-300 to-transparent"></div>
                <span className="mx-4 text-2xl text-[#0077b6] font-bold font-montserrat">{title}</span>
                <div className="w-1/5 h-[2px] bg-gradient-to-r from-base-300 to-transparent"></div>
            </div>
        </div>
    );
};

export default SectionTitle;