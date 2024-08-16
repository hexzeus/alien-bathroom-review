import Navbar from '../components/Navbar';
import ReviewList from '../components/ReviewList';

const ReviewsPage = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center text-electricGreen mb-8 sm:mb-12">
                    All Reviews
                </h1>
                <ReviewList />
            </div>
        </div>
    );
};

export default ReviewsPage;
