import Navbar from '../components/Navbar';
import { fetchReviewById } from '../utils/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type AlienReview = {
    id: number;
    place_name: string;
    comment: string;
    rating_overall: number;
    rating_cleanliness: number;
    rating_comfort: number;
    latitude: number;
    longitude: number;
    status: string;
    flagged: boolean;
};

const AlienReviewDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [review, setReview] = useState<AlienReview | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            const interceptAlienTransmission = async () => {
                setLoading(true);
                try {
                    const data = await fetchReviewById(Number(id));
                    setReview(data);
                } catch (error) {
                    console.error('Galactic communication failure:', error);
                } finally {
                    setLoading(false);
                }
            };
            interceptAlienTransmission();
        }
    }, [id]);

    const renderCosmicRating = (rating: number) => {
        return '🌟'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    if (loading) return <div className="text-center text-green-400 text-2xl animate-pulse glitch" data-text="Intercepting alien transmission...">Intercepting alien transmission...</div>;

    if (!review) return <div className="text-center text-red-500 glitch" data-text="Galactic anomaly detected. Review not found in this dimension.">Galactic anomaly detected. Review not found in this dimension.</div>;

    return (
        <div className="min-h-screen bg-black text-green-400">
            <Navbar />
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-900 p-8 rounded-lg shadow-xl border-2 border-green-500 animate-fadeIn hover:shadow-glow transition-all">
                    <h2 className="text-4xl font-bold bg-gradient-to-r bg-clip-text animate-glow mb-6">{review.place_name}</h2>
                    <p className="mt-4 text-lg text-gray-300 italic animate-fadeInUp">&quot;{review.comment}&quot;</p>
                    <div className="mt-8 space-y-4 animate-fadeInDown">
                        <div className="flex justify-between items-center">
                            <span className="text-green-400 font-semibold">Cosmic Rating:</span>
                            <span className="text-yellow-400">{renderCosmicRating(review.rating_overall)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-green-400 font-semibold">Gravity Field:</span>
                            <span className="text-yellow-400">{renderCosmicRating(review.rating_cleanliness)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-green-400 font-semibold">Atmosphere Quality:</span>
                            <span className="text-yellow-400">{renderCosmicRating(review.rating_comfort)}</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-6">Coordinates: ({review.latitude}, {review.longitude})</p>
                    <p className={`text-sm mt-2 ${review.flagged ? 'text-red-500' : 'text-green-500'}`}>Status: {review.status}</p>
                </div>
                <div className="mt-8 text-center">
                    <button
                        onClick={() => router.push('/reviews')}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-transform hover:scale-110 shadow-inner hover:shadow-glow"
                    >
                        Return to Galactic Database
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AlienReviewDetailPage;
