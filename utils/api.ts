const API_URL = 'http://localhost:5000/api/reviews';  // Change this to the correct backend URL when deploying

export const fetchReviews = async () => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Failed to fetch reviews');
    return res.json();
};

export const fetchReviewById = async (id: number) => {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch review with id ${id}`);
    return res.json();
};

export const submitReview = async (reviewData: object) => {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
    });
    if (!res.ok) throw new Error('Failed to submit review');
    return res.json();
};

export const updateReview = async (id: number, reviewData: object) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
    });
    if (!res.ok) throw new Error(`Failed to update review with id ${id}`);
    return res.json();
};

export const deleteReview = async (id: number) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) throw new Error(`Failed to delete review with id ${id}`);
    return res.json();
};
