import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { fetchReviewStats, fetchAllReviewsForAdmin, approveReview, rejectReview } from '../../utils/api';

// Define the type for the stats object
type ReviewStats = {
    totalReviews: number;
    averageRating: number;
    flaggedReviews: number;
};

// Define the type for the review object
type Review = {
    id: number;
    place_name: string;
    comment: string;
    status: string;
    rating_overall: number;
    rating_cleanliness: number;
    rating_comfort: number;
    created_at: string;
};

const AdminDashboard = () => {
    // State for review stats and reviews
    const [stats, setStats] = useState<ReviewStats | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [actionMessage, setActionMessage] = useState<string | null>(null);

    useEffect(() => {
        const loadDashboard = async () => {
            try {
                // Fetch review stats and reviews
                const statsData = await fetchReviewStats();
                const reviewsData = await fetchAllReviewsForAdmin();
                setStats(statsData);
                setReviews(reviewsData);
            } catch (error) {
                console.error('Error loading dashboard:', error);
            } finally {
                setLoading(false);
            }
        };
        loadDashboard();
    }, []);

    // Handle approving a review
    const handleApprove = async (id: number) => {
        try {
            setActionMessage(null);
            await approveReview(id);
            setReviews(reviews.map(review => (review.id === id ? { ...review, status: 'approved' } : review)));
            setActionMessage('Review approved successfully.');
        } catch (error) {
            console.error('Error approving review:', error);
            setActionMessage('Error approving review.');
        }
    };

    // Handle rejecting a review
    const handleReject = async (id: number) => {
        try {
            setActionMessage(null);
            await rejectReview(id);
            setReviews(reviews.map(review => (review.id === id ? { ...review, status: 'rejected' } : review)));
            setActionMessage('Review rejected successfully.');
        } catch (error) {
            console.error('Error rejecting review:', error);
            setActionMessage('Error rejecting review.');
        }
    };

    if (loading) return <p className="text-center text-white text-2xl">Loading Dashboard...</p>;

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-electricGreen mb-8">Admin Dashboard</h1>

                {/* Display Action Message */}
                {actionMessage && (
                    <div className="bg-electricGreen text-black py-3 px-6 rounded mb-4 text-center">
                        {actionMessage}
                    </div>
                )}

                {/* Stats Section */}
                {stats && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-darkSteel p-6 rounded-lg shadow-xl">
                            <h2 className="text-2xl font-bold text-electricGreen">Total Reviews</h2>
                            <p className="mt-2 text-white text-4xl">{stats.totalReviews}</p>
                        </div>
                        <div className="bg-darkSteel p-6 rounded-lg shadow-xl">
                            <h2 className="text-2xl font-bold text-electricGreen">Average Rating</h2>
                            <p className="mt-2 text-white text-4xl">{stats.averageRating}</p>
                        </div>
                        <div className="bg-darkSteel p-6 rounded-lg shadow-xl">
                            <h2 className="text-2xl font-bold text-electricGreen">Flagged Reviews</h2>
                            <p className="mt-2 text-white text-4xl">{stats.flaggedReviews}</p>
                        </div>
                    </div>
                )}

                {/* Reviews Management Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map(review => (
                        <div key={review.id} className="bg-darkSteel p-6 rounded-lg shadow-xl">
                            <h3 className="text-xl font-bold text-electricGreen">{review.place_name.toUpperCase()}</h3>
                            <p className="mt-2 text-gray-400 italic">&quot;{review.comment}&quot;</p>
                            <p className="mt-2 text-gray-400">Overall Rating: {review.rating_overall}/5</p>
                            <p className="mt-2 text-gray-400">Cleanliness: {review.rating_cleanliness}/5</p>
                            <p className="mt-2 text-gray-400">Comfort: {review.rating_comfort}/5</p>
                            <p className="mt-2 text-gray-400">Status: <span className={`font-bold ${review.status === 'approved' ? 'text-green-400' : review.status === 'rejected' ? 'text-red-400' : 'text-yellow-400'}`}>{review.status}</span></p>
                            <div className="flex space-x-4 mt-4">
                                <button
                                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400 transition-all"
                                    onClick={() => handleApprove(review.id)}
                                    disabled={review.status === 'approved'}
                                >
                                    Approve
                                </button>
                                <button
                                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400 transition-all"
                                    onClick={() => handleReject(review.id)}
                                    disabled={review.status === 'rejected'}
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
