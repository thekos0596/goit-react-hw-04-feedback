import PropTypes from 'prop-types';
import { Votes, VotesItem, Rate } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Votes>
        <VotesItem>
          Good: <Rate>{good}</Rate>
        </VotesItem>
        <VotesItem>
          Neutral: <Rate>{neutral}</Rate>
        </VotesItem>
        <VotesItem>
          Bad: <Rate>{bad}</Rate>
        </VotesItem>
        <VotesItem>
          Total: <Rate>{total}</Rate>
        </VotesItem>
        <VotesItem>
          Positive feedback: <Rate>{positivePercentage}%</Rate>
        </VotesItem>
      </Votes>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
