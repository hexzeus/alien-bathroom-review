import Navbar from '../components/Navbar';
import ReviewList from '../components/ReviewList';

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Welcome to Alien Bathroom Reviews!</h1>
            <ReviewList />
        </div>
    );
};

export default Home;
