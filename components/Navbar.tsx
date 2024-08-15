import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-black p-4 text-white">
            <ul className="flex space-x-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/reviews">Reviews</Link></li>
                <li><Link href="/submitReview">Submit Review</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
