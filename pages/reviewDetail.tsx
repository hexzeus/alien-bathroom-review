import Navbar from '../components/Navbar';
import { fetchReviewById } from '../utils/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type AlienReview = {
    id: number;
    planet_name: string;
    alien_comment: string;
    rating_cosmic: number;
    rating_gravity: number;
    rating_atmosphere: number;
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
                    setReview({
                        ...data,
                        planet_name: data.place_name,
                        alien_comment: data.comment,
                        rating_cosmic: data.rating_overall,
                        rating_gravity: data.rating_cleanliness,
                        rating_atmosphere: data.rating_comfort
                    });
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
                    <h2 className="text-4xl font-bold bg-gradient-to-r bg-clip-text animate-glow mb-6">{review.planet_name}</h2>
                    <p className="mt-4 text-lg text-gray-300 italic animate-fadeInUp">&quot;{review.alien_comment}&quot;</p>
                    <div className="mt-8 space-y-4 animate-fadeInDown">
                        <div className="flex justify-between items-center">
                            <span className="text-green-400 font-semibold">Cosmic Rating:</span>
                            <span className="text-yellow-400">{renderCosmicRating(review.rating_cosmic)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-green-400 font-semibold">Gravity Field:</span>
                            <span className="text-yellow-400">{renderCosmicRating(review.rating_gravity)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-green-400 font-semibold">Atmosphere Quality:</span>
                            <span className="text-yellow-400">{renderCosmicRating(review.rating_atmosphere)}</span>
                        </div>
                    </div>
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