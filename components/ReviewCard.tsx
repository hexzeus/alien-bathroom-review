const ReviewCard = ({ review }: any) => {
    return (
        <div className="bg-gradient-to-br from-gray-800 via-black to-gray-900 p-8 mb-8 rounded-2xl shadow-2xl border border-green-400 transform transition-transform duration-500 hover:scale-105 hover:rotate-2 hover:shadow-glow hover:border-green-500 animate-fadeInUp">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-4xl font-extrabold text-green-400 tracking-wide">
                    {review.place_name.toUpperCase()}
                </h3>
            </div>
            <p className="text-lg text-gray-300 italic mb-6">
                &quot;{review.comment}&quot;
            </p>
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-400">
                <div className="bg-gray-700 p-4 rounded-lg shadow-inner flex flex-col items-center">
                    <span className="font-bold text-lg text-green-400">{review.rating_overall}</span>
                    <span>🌟 Overall</span>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg shadow-inner flex flex-col items-center">
                    <span className="font-bold text-lg text-green-400">{review.rating_cleanliness}</span>
                    <span>🧼 Cleanliness</span>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg shadow-inner flex flex-col items-center">
                    <span className="font-bold text-lg text-green-400">{review.rating_comfort}</span>
                    <span>💺 Comfort</span>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
