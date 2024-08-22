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
    created_at: string;
    status: string;
    flagged: boolean;
    latitude: number;
    longitude: number;
};

const ReviewList = ({ limit }: { limit?: number }) => {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const getReviews = async () => {
            const data = await fetchReviews();
            const sortedReviews = data.sort((a: Review, b: Review) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
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
