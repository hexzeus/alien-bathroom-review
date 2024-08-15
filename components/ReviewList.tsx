import { useEffect, useState } from 'react';
import { fetchReviews } from '../utils/api';
import ReviewCard from './ReviewCard';

type Review = {
    id: number;
    place_name: string;
    comment: string;
    rating_overall: number;
    rating_cleanliness: number;
    rating_comfort: number;
    created_at: string; // Assume we have a created_at field
};

const ReviewList = ({ limit }: { limit?: number }) => {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const getReviews = async () => {
            const data = await fetchReviews();
            // Sort reviews by created_at date (assuming descending order for newest first)
            const sortedReviews = data.sort((a: Review, b: Review) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
            // If a limit is passed, slice the sorted array to show only the limited number of reviews
            setReviews(limit ? sortedReviews.slice(0, limit) : sortedReviews);
        };

        getReviews();
    }, [limit]);

    return (
        <div>
            {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </div>
    );
};

export default ReviewList;
