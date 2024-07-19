import React, { useState, useEffect, lazy, Suspense } from 'react';
import classes from './Feedbacks.module.css';

const FeedbackItem = lazy(() => import('./FeedbackItem'));

const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedbacksData = async () => {
            try {
                const module = await import('../../data/feedback-data');
                setFeedbacks(module.default);
            } catch (error) {
                console.error('Error loading feedbacks data:', error);
            }
        };

        fetchFeedbacksData();
    }, []);

    return (
        <div className={classes['feedbacks-container']}>
            <Suspense fallback={<div>Loading...</div>}>
                {feedbacks.map((item, index) => (
                    <FeedbackItem
                        key={index}
                        photo={item.photo}
                        feedback={item.feedback}
                        customer={item.customer}
                        delay={item.delay}
                    />
                ))}
            </Suspense>
        </div>
    );
};

export default Feedbacks;
