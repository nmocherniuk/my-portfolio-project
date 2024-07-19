import React from 'react';
import { motion as m } from 'framer-motion';
import quotationMark from '../../assets/quotation-mark.svg';
import classes from './FeedbackItem.module.css';

const FeedbackItem = ({ photo, feedback, customer, delay }) => (
  <m.article
    whileInView={{ opacity: [0, 1] }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={classes["feedback-item"]}
  >
    <div className={classes.rectangle} />
    <div className={classes["feedback-content"]}>
      <img className={classes["quotation-mark"]} src={quotationMark} alt="Quotation mark" />
      <img className={classes["customer-photo"]} src={photo} alt="Customer" />
      <blockquote className={classes["customer-feedback"]}>
        {feedback}
      </blockquote>
      <address className={classes.customer}>
        {customer}
      </address>
    </div>
  </m.article>
);


export default FeedbackItem;