import Link from 'next/link';
import Image from 'next/image'; // Next.js Image component for optimization

const Navbar = () => {
    return (
        <nav className="bg-black p-4 text-white sticky top-0 z-50 shadow-lg animate-fadeInDown flex justify-between items-center">
            <div className="flex items-center space-x-4">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/alienlogo.png"
                        alt="Alien Logo"
                        width={50}
                        height={50}
                        className="hover:scale-110 transition-transform duration-300"
                    />
                </Link>
                <span className="text-2xl font-bold text-green-400">BATHROOM REVIEWS</span>
            </div>

            {/* Navigation Links */}
            <ul className="flex space-x-6">
                <li className="group">
                    <Link href="/" className="relative text-xl hover:text-green-400 transition duration-500">
                        Home
                    </Link>
                </li>
                <li className="group">
                    <Link href="/reviews" className="relative text-xl hover:text-green-400 transition duration-500">
                        Reviews
                    </Link>
                </li>
                <li className="group">
                    <Link href="/submitReview" className="relative text-xl hover:text-green-400 transition duration-500">
                        Submit Review
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
