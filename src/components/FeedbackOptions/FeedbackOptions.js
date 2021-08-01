import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ bad, neutral, good, onFeedbackButton }) => {
  return (
    <div>
      <button
        id="good"
        className={styles.button}
        onClick={() => onFeedbackButton('good')}
      >
        Good
      </button>
      <button
        id="neutral"
        className={styles.button}
        onClick={() => onFeedbackButton('neutral')}
      >
        Neutral
      </button>
      <button
        id="bad"
        className={styles.button}
        onClick={() => onFeedbackButton('bad')}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
