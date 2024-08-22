const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://alien-2q9q.onrender.com/api'
    : 'http://localhost:5000/api';  // Base URL for your API

// Helper function for API calls
const handleAPIResponse = async (res: Response) => {
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`API Error: ${res.status} - ${errorText}`);
    }
    return res.json();
};

// Fetch all reviews for the general use
export const fetchReviews = async () => {
    const res = await fetch(`${API_URL}/reviews`);
    return handleAPIResponse(res);
};

// Fetch a single review by ID
export const fetchReviewById = async (id: number) => {
    const res = await fetch(`${API_URL}/reviews/${id}`);
    return handleAPIResponse(res);
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
    return handleAPIResponse(res);
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
    return handleAPIResponse(res);
};

// Delete a review by ID
export const deleteReview = async (id: number) => {
    const res = await fetch(`${API_URL}/reviews/${id}`, {
        method: 'DELETE',
    });
    return handleAPIResponse(res);
};

// Fetch review stats for the admin dashboard
export const fetchReviewStats = async () => {
    const res = await fetch(`${API_URL}/admin/stats`);
    return handleAPIResponse(res);
};

// Fetch all reviews for the admin dashboard
export const fetchAllReviewsForAdmin = async () => {
    const res = await fetch(`${API_URL}/admin/reviews`);
    return handleAPIResponse(res);
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
    return handleAPIResponse(res);
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
    return handleAPIResponse(res);
};
