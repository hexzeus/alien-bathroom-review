import Navbar from '../components/Navbar';
import { fetchReviewById } from '../utils/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Define the Review type
type Review = {
    id: number;
    place_name: string;
    comment: string;
    rating_overall: number;
    rating_cleanliness: number;
    rating_comfort: number;
};

const ReviewDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [review, setReview] = useState<Review | null>(null);

    useEffect(() => {
        if (id) {
            const getReview = async () => {
                const data = await fetchReviewById(Number(id));
                setReview(data);
            };

            getReview();
        }
    }, [id]);

    if (!review) return <div className="text-center text-white">Loading...</div>;

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-green-400 animate-fadeIn">
                    <h2 className="text-3xl font-bold text-green-400">{review.place_name}</h2>
                    <p className="mt-4 text-gray-300">{review.comment}</p>
                    <div className="mt-6 text-gray-500">
                        <p>Overall Rating: {review.rating_overall}</p>
                        <p>Cleanliness: {review.rating_cleanliness}</p>
                        <p>Comfort: {review.rating_comfort}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetailPage;
