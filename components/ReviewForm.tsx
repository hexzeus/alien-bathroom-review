import { useState } from 'react';
import { submitReview } from '../utils/api';

const ReviewForm = () => {
    const [form, setForm] = useState({
        place_name: '',
        comment: '',
        rating_overall: 0,
        rating_cleanliness: 0,
        rating_comfort: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleRatingChange = (field: string, value: number) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await submitReview(form);
        alert("Review submitted successfully!");
        setForm({
            place_name: '',
            comment: '',
            rating_overall: 0,
            rating_cleanliness: 0,
            rating_comfort: 0,
        });
    };

    const ratingButtons = (field: string, value: number) => (
        <div className="flex justify-between space-x-3">
            {[1, 2, 3, 4, 5].map((rating) => (
                <button
                    key={rating}
                    type="button"
                    onClick={() => handleRatingChange(field, rating)}
                    className={`p-4 rounded-full text-xl font-bold transition-all transform duration-300 
                        ${value === rating
                            ? 'bg-green-400 text-black scale-110 shadow-glow'
                            : 'bg-gray-800 text-white hover:bg-green-500 hover:text-black hover:scale-105'
                        }`}
                >
                    {rating}
                </button>
            ))}
        </div>
    );

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 p-8 rounded-2xl shadow-2xl space-y-8 w-full max-w-lg mx-auto animate-fadeInUp"
        >
            <div className="relative w-full">
                <input
                    type="text"
                    name="place_name"
                    value={form.place_name}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full p-4 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-green-400 outline-none transition duration-300 peer"
                    required
                />
                <label className="absolute text-gray-400 transform scale-90 -translate-y-6 top-3 left-4 transition-all duration-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-90 peer-focus:-translate-y-6">
                    PLACE NAME
                </label>
            </div>

            <div className="relative w-full">
                <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full p-4 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-green-400 outline-none transition duration-300 peer"
                    required
                />
                <label className="absolute text-gray-400 transform scale-90 -translate-y-6 top-3 left-4 transition-all duration-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-90 peer-focus:-translate-y-6">
                    COMMENT
                </label>
            </div>

            <div className="w-full space-y-6">
                <div className="flex flex-col space-y-2">
                    <label className="text-green-400 text-lg">OVERALL RATING</label>
                    {ratingButtons('rating_overall', form.rating_overall)}
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-green-400 text-lg">CLEANLINESS RATING</label>
                    {ratingButtons('rating_cleanliness', form.rating_cleanliness)}
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-green-400 text-lg">COMFORT RATING</label>
                    {ratingButtons('rating_comfort', form.rating_comfort)}
                </div>
            </div>

            <button
                type="submit"
                className="w-full py-4 bg-green-400 text-black rounded-xl hover:bg-green-500 transition-all duration-300 font-bold hover:shadow-glow transform hover:scale-105"
            >
                SUBMIT REVIEW
            </button>
        </form>
    );
};

export default ReviewForm;
