const ReviewCard = ({ review }: any) => {
    return (
        <div>
            <h3>{review.place_name}</h3>
            <p>{review.comment}</p>
            <p>Overall: {review.rating_overall}</p>
            <p>Cleanliness: {review.rating_cleanliness}</p>
            <p>Comfort: {review.rating_comfort}</p>
        </div>
    );
};

export default ReviewCard;
