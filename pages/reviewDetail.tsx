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

    // Initialize state with Review type or null
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

    if (!review) return <div>Loading...</div>;

    return (
        <div>
            <Navbar />
            <h1>Review Details</h1>
            <h2>{review.place_name}</h2>
            <p>{review.comment}</p>
            <p>Overall Rating: {review.rating_overall}</p>
            <p>Cleanliness: {review.rating_cleanliness}</p>
            <p>Comfort: {review.rating_comfort}</p>
        </div>
    );
};

export default ReviewDetailPage;
