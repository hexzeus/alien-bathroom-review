import Navbar from '../components/Navbar';
import ReviewList from '../components/ReviewList';

const Home = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="relative text-5xl md:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-purple-500 to-blue-500 mb-12 animate-text-glow">
                    BATHROOM REVIEWS
                </h1>
                <ReviewList limit={10} />
            </div>
        </div>
    );
};

export default Home;
