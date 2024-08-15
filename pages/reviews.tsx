import Navbar from '../components/Navbar';
import ReviewList from '../components/ReviewList';

const ReviewsPage = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-6xl font-bold text-center text-green-400 mb-12">
                    All Reviews
                </h1>
                {/* Show all reviews */}
                <ReviewList />
            </div>
        </div>
    );
};

export default ReviewsPage;
