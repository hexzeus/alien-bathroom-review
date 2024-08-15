import { useEffect, useState } from 'react';
import { fetchReviews } from '../utils/api';
import ReviewCard from './ReviewCard';

// Define the Review type
type Review = {
    id: number;
    place_name: string;
    comment: string;
    rating_overall: number;
    rating_cleanliness: number;
    rating_comfort: number;
};

const ReviewList = () => {
    // Specify that reviews is an array of Review objects
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const getReviews = async () => {
            const data = await fetchReviews();
            setReviews(data);
        };

        getReviews();
    }, []);

    return (
        <div>
            {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </div>
    );
};

export default ReviewList;
