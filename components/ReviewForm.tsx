import { useState } from 'react';
import { submitReview } from '../utils/api';

const ReviewForm = () => {
    const [form, setForm] = useState({
        place_name: '',
        comment: '',
        rating_overall: 0,
        rating_cleanliness: 0,
        rating_comfort: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await submitReview(form);
        // Optionally, redirect or clear the form
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="place_name" value={form.place_name} onChange={handleChange} placeholder="Place Name" required />
            <textarea name="comment" value={form.comment} onChange={handleChange} placeholder="Comment" required />
            <input type="number" name="rating_overall" value={form.rating_overall} onChange={handleChange} placeholder="Overall Rating" />
            <input type="number" name="rating_cleanliness" value={form.rating_cleanliness} onChange={handleChange} placeholder="Cleanliness" />
            <input type="number" name="rating_comfort" value={form.rating_comfort} onChange={handleChange} placeholder="Comfort" />
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
