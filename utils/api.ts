const API_URL = 'https://alien-2q9q.onrender.com/api';  // Base URL for your API

// Fetch all reviews for the general use
export const fetchReviews = async () => {
    const res = await fetch(`${API_URL}/reviews`);
    if (!res.ok) throw new Error('Failed to fetch reviews');
    return res.json();
};

// Fetch a single review by ID
export const fetchReviewById = async (id: number) => {
    const res = await fetch(`${API_URL}/reviews/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch review with id ${id}`);
    return res.json();
};

// Submit a new review
export const submitReview = async (reviewData: object) => {
    const res = await fetch(`${API_URL}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
    });
    if (!res.ok) throw new Error('Failed to submit review');
    return res.json();
};

// Update an existing review by ID
export const updateReview = async (id: number, reviewData: object) => {
    const res = await fetch(`${API_URL}/reviews/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
    });
    if (!res.ok) throw new Error(`Failed to update review with id ${id}`);
    return res.json();
};

// Delete a review by ID
export const deleteReview = async (id: number) => {
    const res = await fetch(`${API_URL}/reviews/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) throw new Error(`Failed to delete review with id ${id}`);
    return res.json();
};

// Fetch review statistics for the admin dashboard
export const fetchReviewStats = async () => {
    const res = await fetch(`${API_URL}/admin/stats`);
    if (!res.ok) throw new Error('Failed to fetch review statistics');
    return res.json();
};

// Fetch all reviews for the admin dashboard
export const fetchAllReviewsForAdmin = async () => {
    const res = await fetch(`${API_URL}/admin/reviews`);
    if (!res.ok) throw new Error('Failed to fetch reviews for admin');
    return res.json();
};

// Approve a review by ID
export const approveReview = async (id: number) => {
    const res = await fetch(`${API_URL}/reviews/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'approved' }),
    });
    if (!res.ok) throw new Error('Failed to approve review');
    return res.json();
};

// Reject a review by ID
export const rejectReview = async (id: number) => {
    const res = await fetch(`${API_URL}/reviews/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'rejected' }),
    });
    if (!res.ok) throw new Error('Failed to reject review');
    return res.json();
};
