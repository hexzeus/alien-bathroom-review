import Navbar from '../components/Navbar';
import ReviewList from '../components/ReviewList';

const ReviewsPage = () => {
    return (
        <div>
            <Navbar />
            <h1>All Reviews</h1>
            <ReviewList />
        </div>
    );
};

export default ReviewsPage;
