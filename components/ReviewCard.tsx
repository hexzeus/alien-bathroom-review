const ReviewCard = ({ review }: any) => {
    return (
        <div className="bg-gradient-to-br from-bikerBlack via-darkSteel to-black p-6 sm:p-8 mb-8 rounded-2xl shadow-glow border-2 border-electricGreen transform transition-transform duration-500 hover:scale-105 hover:rotate-2 hover:shadow-glow">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl sm:text-5xl font-biker text-electricGreen tracking-wide">
                    {review.place_name.toUpperCase()}
                </h3>
            </div>
            <p className="text-base sm:text-lg text-gray-400 italic mb-4 sm:mb-6">
                &quot;{review.comment}&quot;
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                <div className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-inner flex flex-col items-center">
                    <span className="font-bold text-lg sm:text-xl text-electricGreen">{review.rating_overall}</span>
                    <span>🌟 Overall</span>
                </div>
                <div className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-inner flex flex-col items-center">
                    <span className="font-bold text-lg sm:text-xl text-electricGreen">{review.rating_cleanliness}</span>
                    <span>🧼 Cleanliness</span>
                </div>
                <div className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-inner flex flex-col items-center">
                    <span className="font-bold text-lg sm:text-xl text-electricGreen">{review.rating_comfort}</span>
                    <span>💺 Comfort</span>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
