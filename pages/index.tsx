import Navbar from '../components/Navbar';
import ReviewList from '../components/ReviewList';

const Home = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="glitch" data-text="BATHROOM REVIEWS">
                    BATHROOM REVIEWS
                </h1>
                <ReviewList limit={10} />
            </div>
        </div>
    );
};

export default Home;