import css from './Feedback.module.css';

export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <ul className={css.feedback}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
}
